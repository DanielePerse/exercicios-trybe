const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 3000;

// aqui configuro meu multer. Dizendo, multer, aplica um middlare e o armazene nessa pasta (destino). Foi comentado depois e substituido por storage, pois o outro é uma outra maneira de fazer isso tb.
// const upload = multer({
//   dest: './uploads',
// });

// dessa maneira fazemos o mesmo e conseguimos tb salvar o arquivo com o nome original, inclusive com a extensão dela. E tb pode customizar o nome do arquivo assim. Se enviarem 2 arquivos vom mesmo nome, o ulter sobrescreve, por isso usou a função Date.now()
// const storage = multer.diskStorage({
//   destination: (_req, _file, callback) => {
//     callback(null, 'uploads')
//   },
//   filename: (req, file, callback) => {
//     callback(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// ele armazena apenas em memória, não salva no disco. Utilidade: vc envia um arquivo, mas não quer salvá-lo. Só quer ler e depois descartar (automaticamente). ler sobre diskStorage tb
const storage = multer.memoryStorage();

const upload = multer({ storage });

// aqui dizemos para o express que temos um diretório com arquivos estáticos que queremos deixar disponível para ser acessados. Aqui fiz uma req. tipo GET no insomnia (acessa-imagem), e coloquei como id o nome do arquivo.: http://localhost:3000/8e4e23a126c91ba291272ad1d02b60a3
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/public'));

// single - upload único arquivo
app.post('/upload/single', upload.single('file'), (req, res) => {
  const { body, file } = req;

  // caso escolhermos não salvar o arquivo no disco (l. 22), conseguimos acessar ele dessa maneira abaixo. e em vez de 'file' na l. 38, escreveria content, para ver esse contepudo (somente texto, imagem não funciona)
  // const { buffer } = file;
  // const content = buffer.toString('utf-8');

  res.status(200).json({ body, file });
});

// 
app.post('/upload/memory', upload.single('file'), (req, res) => {
  const { body, file } = req;

  const { buffer } = file;
  const content = buffer.toString('utf-8')

  res.status(200).json({ body, content });
});

// any - upload de um ou mais arquivos.
app.post('/upload/any', upload.any('file'), (req, res) => {
  const { body, files } = req;
  res.status(200).json({ body, files });
});

// podemos usar a palavra array em vez de any também
app.post('/upload/array', upload.array('avatar'), (req, res) => {
  const { body, files } = req;
  
  res.status(200).json({ body, files });
});

// none - quando queremos enfatizar que um endpoint não é para rodar arquivo
app.post('/upload/none', upload.none(), (req, res) => {
  const { body, files } = req;

  res.status(200).json({ body, files });
});

// quando vc quer enviar vários arquivos com nomes diferentes. Ex. foto rg frente e verso (separados). maxCount: só pode enviar um lado 1x, se quiser mais vezes, aumenta esse valor.
app.post('/upload/fields', 
  upload.fields([{ name: 'frente', maxCount: 1}, { name: 'verso', maxCount: 1}]), 
  (req, res) => {
    const { body, files } = req;

    res.status(200).json({ body, files });
});

app.use((err, req, res, next) => res.status(500).json({ err }))

app.listen(PORT, () => { console.log(`Escutando porta: ${PORT}`)});
