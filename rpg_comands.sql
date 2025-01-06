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
