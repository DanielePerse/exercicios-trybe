#!/bin/bash
#Escreva um _Shell Script_ que guarde o resultado do comando `hostname` em uma variável. Imprima na tela
#uma mensagem: `"Este script está rodando no computador: _"` em que `"_"` é o resultado do comando 
#`hostname` que está na variável;

NOMEPC=`whoami`

echo "Este script está rodando no computador: $NOMEPC"

HOSTNAME=$(whoami)
echo "Este script está rodando no computador: $HOSTNAME"