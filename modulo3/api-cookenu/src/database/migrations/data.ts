export const users = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        name: "Astrodev",
        email: "astrodev@gmail.com",
        password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC" // bananinha
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        name: "Fulano",
        email: "fulano@gmail.com",
        password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO" // qwerty00
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        name: "Ciclana",
        email: "ciclana@gmail.com",
        password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i" // asdfg123
    }
];

export const recipes = [
    {
        id: "f03017bb-2c08-4cdc-12er-71f455j78921",
        user_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        title: "cookie de aveia",
        description: "Amassar a banana, misturar a pasta de amendoim, misturar a aveia em flocos finos, levar para assar até dourar.",
        created_at: "2022-01-24"
    },
    {
        id: "bb9b7ee8-ae4b-4bd1-12er-71f455j78921",
        user_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        title: "Tahine caseiro",
        description: "Para fazer, basta torrar levemente as sementes de gergelim e depois bater em um processador até formar uma pasta. Tem pessoas que adicionam algum óleo para ajudar a bater mais rápido, porém, não é necessário. Se quiser uma pasta mais lisa, bata por mais tempo.",
        created_at: "2022-01-24"
    },
    {
        id: "7079b8e4-95cd-48aa-12er-71f455j78921",
        user_id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        title: "Hambúrguer de Lentilha",
        description: "Triture as bolachas no liquidificador e coloque em uma tigela com o leite condensado e o amendoim até obter umCozinhar a lentilha até que ela fique cozida, mas ainda firme. Em um processador de alimentos, vamos adicionar metade da lentilha cozida, legumes e temperos até ficar tudo bem misturado. Não se preocupe em transformar em uma pasta lisa, pois é importante ter textura.Adicionar os ingredientes em uma vasilha com o restante da lentilha cozida, farinhas de aveia e de linhaça e salsinha fresca picada. Modelar os hambúrgueres no tamanho desejado e assar no forno ou na airfryer.",
        created_at: "2022-02-18"
    }
];

export const followers = [
    {
        id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b",
        user_to_follow_id: "7079b8e4-95cd-48aa-82a9-77454e94b789"
    },
    {
        id: "7079b8e4-95cd-48aa-82a9-77454e94b789",
        user_to_follow_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b"
    },
    {
        id: "f03017bb-2c08-4cdc-bb63-7fbd7cebe01f",
        user_to_follow_id: "bb9b7ee8-ae4b-4bd1-9bd6-e7e21594399b"
    },
];