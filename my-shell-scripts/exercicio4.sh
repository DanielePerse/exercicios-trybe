#!/bin/bash
#4. Escreva um Shell Script que verifique se o caminho até um arquivo existe ("file path"). Se ele existir,
#imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de 
#escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". 
#Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser 
#substituído pelo ("file path").

#se existir, imprimi na tela msg
DIRETORIO="/home/daniele/Testes_trybe/aula3_shellScrip/exercicio1_2.sh"

if [ -e "$DIRETORIO" ] 
    then 
        echo "O caminho $DIRETORIO está habilitado!"

fi

if [ -w "$DIRETORIO" ]
    then
        echo "Você tem permissão para editar $DIRETORIO"
                
    else 
        echo "Você não foi autorizado a editar o $DIRETORIO"

fi





