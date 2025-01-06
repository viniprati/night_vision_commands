# Bot de RPG - Discord

Esse é um bot de RPG criado para **Discord**, projetado para substituir o ProBot em comandos de RPG. Ele responde aos comandos com informações detalhadas e dinâmicas, além de armazenar tudo em um banco de dados SQL Server.

## Funcionalidades

- **Comandos personalizados**: Crie e gerencie comandos de RPG que são salvos em um banco de dados e respondidos pelo bot.
- **Integração com Discord**: O bot responde a comandos dos usuários diretamente no Discord.
- **Armazenamento em banco de dados**: Comandos e respostas são salvos e carregados de um banco de dados, garantindo mais flexibilidade.

## Tecnologias Utilizadas

- **Node.js**: Para rodar o bot no servidor.
- **Discord.js**: Para interagir com o Discord.
- **mssql**: Para conectar ao banco de dados SQL Server.
- **dotenv**: Para configurar variáveis de ambiente de forma segura.

## Como Rodar

### O que você vai precisar

- **Node.js** (v16 ou superior)
- **Microsoft SQL Server** (ou outro banco de dados SQL Server acessível)

### Passo a Passo

1. Primeiro, clone esse repositório:
    ```bash
    git clone https://github.com/seu-usuario/bot-de-rpg.git
    cd bot-de-rpg
    ```

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

3. Crie o arquivo `.env` na raiz do projeto com suas configurações:
    ```env
    DB_USER=seu_usuario
    DB_HOST=localhost
    DB_NAME=danos_bot
    DB_PASS=sua_senha
    DB_PORT=1433
    TOKEN=seu_token_do_discord
    CLIENT_ID=seu_client_id_do_discord
    ```

4. Agora, crie o banco de dados no SQL Server:
    ```sql
    CREATE DATABASE danos_bot;
    
    USE danos_bot;

    CREATE TABLE commands (
        id INT PRIMARY KEY IDENTITY(1,1),
        command_name NVARCHAR(255) NOT NULL,
        response NVARCHAR(MAX) NOT NULL
    );
    
    INSERT INTO commands (command_name, response) VALUES 
    ('rui1', 
    '**【 🌙 】━━━━━≼◦Night Vision◦≽━━━━━【 🌙 】\n\n➥ — <@!{user}> - Usou... "Ito Bashiri" — Manipulação de Fios.\n\n➤ [📖] - O usuário cria diversos fios cortantes da ponta de seus dedos e os balança para atingir seu adversário.\n➤ [❤️] - Adversário perde 15.000 de HP para cada acerto.\n➤ [🎲] - Usuário deverá usar um roll 6 para saber quantos golpes conseguiu lançar.\n➤ [🩸] - Adversário perde 10.000 HP adicionais por [1 turno] pelo sangramento causado. {Para cada fio que o acertar!}\n➤ [🌀] - Usuário gastou 30.000 de energia no uso da técnica.\n➤ [💪] - A força do usuário não é somada no cálculo do dano desta técnica.\n➤ [💢] - Impossível defender.\n➤ [📌] - Sem limite para uso.\n\n✎◦.• [Anexo](https://tenor.com/bVbJ4.gif)\n\n【 🌙 】━━━━━≼◦Night Vision◦≽━━━━━【 🌙 】');
    ```

5. E por último, execute o bot:
    ```bash
    node index.js
    ```

## Como Funciona

O bot responde a comandos registrados no banco de dados. Cada comando tem um nome (como `/rui1`) e uma resposta associada que pode incluir variáveis dinâmicas, como o nome do usuário que enviou o comando.

Exemplo de comando:

- **Comando:** `/rui1`
- **Resposta:**
  
  ```plaintext
  **【 🌙 】━━━━━≼◦Night Vision◦≽━━━━━【 🌙 】**

  ➥ — <@!983870132063453235> - Usou... "Ito Bashiri" — Manipulação de Fios.

  ➤ [📖] - O usuário cria diversos fios cortantes da ponta de seus dedos e os balança para atingir seu adversário.

  ➤ [❤️] - Adversário perde 15.000 de HP para cada acerto.
  ➤ [🎲] - Usuário deverá usar um roll 6 para saber quantos golpes conseguiu lançar.
  ➤ [🩸] - Adversário perde 10.000 HP adicionais por [1 turno] pelo sangramento causado. {Para cada fio que o acertar!}
  ➤ [🌀] - Usuário gastou 30.000 de energia no uso da técnica.
  ➤ [💪] - A força do usuário não é somada no cálculo do dano desta técnica.
  ➤ [💢] - Impossível defender.
  ➤ [📌] - Sem limite para uso.

  ✎◦.• [Anexo](https://tenor.com/bVbJ4.gif)

  【 🌙 】━━━━━≼◦Night Vision◦≽━━━━━【 🌙 】**


# Aviso de Propriedade
Este bot é propriedade exclusiva do **Night Vision**. Qualquer utilização, cópia ou distribuição sem permissão prévia poderá resultar em problemas legais. Se você deseja usar ou modificar o bot, por favor entre em contato para obter autorização.

# Contato
Telefone: +55 (27) 998235428 / 
Discord ID: viniciuspratimachado
