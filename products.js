// --- BANCO DE DADOS DE PRODUTOS E COLEÇÕES ---
// Para adicionar um novo produto, basta copiar um bloco de {} e colar, alterando os dados.
// Para adicionar uma nova coleção, copie um bloco inteiro de "colecao" e altere os dados.

const collections = [
    {
        id: 'essencia',
        name: 'Coleção Essência',
        description: '"Leveza e conforto para acompanhar o seu ritmo."',
        products: [
            { id: 1, name: 'Top Serena', price: 189.90, image: 'https://placehold.co/600x800/A7BBA5/FFFFFF?text=Top+Serena' },
            { id: 2, name: 'Legging Fluir', price: 249.90, image: 'https://placehold.co/600x800/D3A588/FFFFFF?text=Legging+Fluir' },
            { id: 3, name: 'Body Alma', price: 219.90, image: 'https://placehold.co/600x800/F4EDE4/3A2F2F?text=Body+Alma' },
            { id: 4, name: 'Short Movimento', price: 159.90, image: 'https://placehold.co/600x800/3A2F2F/FFFFFF?text=Short+Movimento' },
        ]
    },
    {
        id: 'conexao',
        name: 'Coleção Conexão Natural',
        description: '"Peças versáteis para práticas ao ar livre."',
        products: [
            { id: 5, name: 'Jaqueta Brisa', price: 349.90, image: 'https://placehold.co/600x800/a7bba5/FFFFFF?text=Jaqueta+Brisa' },
            { id: 6, name: 'Macacão Terra', price: 389.90, image: 'https://placehold.co/600x800/d3a588/FFFFFF?text=Macac%C3%A3o+Terra' },
            { id: 7, name: 'Top Raiz', price: 199.90, image: 'https://placehold.co/600x800/3A2F2F/FFFFFF?text=Top+Raiz' },
            { id: 8, name: 'Calça Folha', price: 279.90, image: 'https://placehold.co/600x800/f4ede4/3A2F2F?text=Cal%C3%A7a+Folha' },
        ]
    }
];
