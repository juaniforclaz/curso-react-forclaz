const productos = [
    {
        id: 1,
        title: "Producto 1",
        desc: "Una descripción",
        price: 1200,
        categoria: "bolso-odo-uba",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/94f8c279-8c6b-4837-ac5f-aeed1fe035841-74412f9b1b2ce5809a16291441299784-480-0.jpeg'
    },
    {
        id: 2,
        title: "Producto 2",
        desc: "Una descripción",
        price: 2200,
        categoria: "bolso-odo-uba",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/96ff0cc5-0894-4661-b22d-1ad9379928931-a2e6942257c4fef4a016299069438104-480-0.jpeg'
    },
    {
        id: 3,
        title: "Producto 3",
        desc: "Una descripción",
        price: 3200,
        categoria: "mochila",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/ca81ea17-581f-41f4-a0c2-56c2a822f9031-f63bc9d570bbccf03616265583848113-480-0.jpeg'
    },
    {
        id: 4,
        title: "Producto 4",
        desc: "Una descripción",
        price: 4200,
        categoria: "cartera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/9ac61e6f-815c-46cf-b9fc-ff98435b667b-49fd3754436b24d9f516484206400104-480-0.jpeg'
    },
    {
        id: 5,
        title: "Producto 5",
        desc: "Una descripción",
        price: 5200,
        categoria: "cartera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/ecfebb5c-a13e-412f-bcb6-9b85abc87acc1-7b6f6b2ec7c475ffb016345070701421-480-0.jpeg'
    },
    {
        id: 6,
        title: "Producto 6",
        desc: "Una descripción",
        price: 6200,
        categoria: "mochila",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/1cdbeffd-2a84-4c72-9e1f-635a7bc1d9c01-77364078c49b8faa7616259455396308-480-0.jpeg'
    },
    {
        id: 7,
        title: "Producto 7",
        desc: "Una descripción",
        price: 6200,
        categoria: "cartera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/1ae9d4ab-0b29-484c-b38b-e658c1b4ff721-abdde90d5fb4fb5fc616205946886975-480-0.jpeg'
    },
    {
        id: 8,
        title: "Producto 8",
        desc: "Una descripción",
        price: 6200,
        categoria: "cartera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/bef84a79-a519-4531-89e7-07b92ce5a78d1-565134a44473b6369f16196274860667-480-0.jpeg'
    },
    {
        id: 9,
        title: "Producto 9",
        desc: "Una descripción",
        price: 6200,
        categoria: "riñonera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/2e831a3b-e104-4eeb-8e27-07689767c2601-5c440ef5f4d2ce634116208598787952-480-0.jpeg'
    },
    {
        id: 10,
        title: "Producto 10",
        desc: "Una descripción",
        price: 6200,
        categoria: "riñonera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/f830ef4d-34b7-4ae6-aff1-f2a8ad9896261-446a81691036086d1d15946999835740-480-0.jpeg'
    },
    {
        id: 11,
        title: "Producto 11",
        desc: "Una descripción",
        price: 6200,
        categoria: "riñonera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/1a74373c-c5bc-4f8a-92fa-34b6ce3842731-9c8dbbdb57f1af87a715949438421103-480-0.jpeg'
    },
    {
        id: 12,
        title: "Producto 12",
        desc: "Una descripción",
        price: 6200,
        categoria: "riñonera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/48161688-3943-4c2e-a4c3-89ac4bcf3af71-6595e8a256c12ab0d116203367991319-480-0.jpeg'
    },
    {
        id: 13,
        title: "Producto 13",
        desc: "Una descripción",
        price: 6200,
        categoria: "riñonera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/dd694ec0-9871-43c5-ab5c-3fcda869c7371-e377c8e1ae15a6ad6016461741581348-480-0.jpeg'
    },
    {
        id: 14,
        title: "Producto 14",
        desc: "Una descripción",
        price: 6200,
        categoria: "bolso",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/4c0fb145-04b0-44f0-b022-91a1995c94bd1-1e19426c21396146af16268867881987-480-0.jpeg'
    },
    {
        id: 15,
        title: "Producto 15",
        desc: "Una descripción",
        price: 6200,
        categoria: "billetera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/3aa32692-cb59-4bf1-8047-1d91c45ae67c1-1b6d5dd19e740c974616259461856349-480-0.jpeg'
    },
    {
        id: 16,
        title: "Producto 16",
        desc: "Una descripción",
        price: 6200,
        categoria: "riñonera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/afb35bdb-99fb-41ef-a41b-eef22ba11712-6bd1bfb43da0fae42616359975317428-480-0.jpeg'
    },
    {
        id: 17,
        title: "Producto 17",
        desc: "Una descripción",
        price: 6200,
        categoria: "bolso",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/58a82f4d-2590-41c3-9a9f-aff31fb177ee1-a6889cf89cb178fe6b16199035719555-480-0.jpeg'
    },
    {
        id: 18,
        title: "Producto 18",
        desc: "Una descripción",
        price: 6200,
        categoria: "bandolera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/c5f5f011-0e19-485c-8431-cea8096af1451-db688e45f5b075f4a116066096210260-480-0.jpeg'
    },
    {
        id: 19,
        title: "Producto 19",
        desc: "Una descripción",
        price: 6200,
        categoria: "cartera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/ad0c688f-c005-4cb5-92f7-d86d5471e33f1-546b8f3891bae59a1916173957700799-480-0.jpeg'
    },
    {
        id: 20,
        title: "Producto 20",
        desc: "Una descripción",
        price: 6200,
        categoria: "bandolera",
        stock: 5,
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/271/738/products/12947d8d-8e07-4276-a582-44cb079bae6a-c2e182dbc13344632116219013738708-480-0.jpeg'
    },
]

export default productos