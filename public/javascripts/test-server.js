const axios = require('axios');

// 검색창 입력후 엔터할 때
// axios.get('http://dblp.ourguide.xyz/papers/search',
//     {
//         query: {
//             q: 'text'
//         }
//     })
//     .then(function (response) {
//         // console.log(response);
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// 자신의 정보와 부모나 자식의 노드들을 group 프로퍼티로 보여준다.
// axios.get('http://dblp.ourguide.xyz/papers/38135245-8eff-4078-af6a-ea559ffa660b/ancestor', {
//     query: {
//         value: 10
//     }
// })
//     .then(function (response) {
//         // console.log(response);
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// **해당 논문의 자기정보를 보여준다.
// axios.get('http://dblp.ourguide.xyz/papers/38135245-8eff-4078-af6a-ea559ffa660b/info')
//     .then(function (response) {
//         // console.log(response);
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });


// *그룹 내 그룹장 찾기
// axios.post('http://dblp.ourguide.xyz/papers/representative', {
//     group: [
//         "4be8eaca-a28a-4382-86c2-9314735066bd",
//         "7281e056-a2f6-4df3-bd54-fbd8ed8b737c",
//         "78efca65-ac1a-49bd-92ec-c8f0770fefb8",
//         "7d911d74-c4c1-4d4d-a737-5cf51e404c83",
//         "85bd9cc6-e41a-4fd4-8f3b-e776329efc4b",
//         "aa16086f-f3bf-432a-bfcd-9f1521c9ac52",
//         "cab91964-4e8d-4211-8d32-455cfd690b60",
//         "dc00221e-92c4-4ee4-8a7b-666ab5fd28c5",
//         "ea9489be-45f6-482f-937c-11b644d5f2ce",
//         "f258af24-e04a-49d4-86c3-1ab1c2f43914",
//         "fa96abdc-7c09-419b-a00d-4c24d5879eeb"
//     ]
// }) .then(function (response) {
//     console.log(response.data);
// })
//     .catch(function (error) {
//         console.log(error);
//     });


// **그룹안 노드들의 네트워크 만들어주기
// axios.post('http://dblp.ourguide.xyz/papers/network', {
//     group: [
//         "4be8eaca-a28a-4382-86c2-9314735066bd",
//         "7281e056-a2f6-4df3-bd54-fbd8ed8b737c",
//         "78efca65-ac1a-49bd-92ec-c8f0770fefb8",
//         "7d911d74-c4c1-4d4d-a737-5cf51e404c83",
//         "85bd9cc6-e41a-4fd4-8f3b-e776329efc4b",
//         "aa16086f-f3bf-432a-bfcd-9f1521c9ac52",
//         "cab91964-4e8d-4211-8d32-455cfd690b60",
//         "dc00221e-92c4-4ee4-8a7b-666ab5fd28c5",
//         "ea9489be-45f6-482f-937c-11b644d5f2ce",
//         "f258af24-e04a-49d4-86c3-1ab1c2f43914",
//         "fa96abdc-7c09-419b-a00d-4c24d5879eeb"
//
//     ]
// })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// **해당 그룹의 키워드들을 줌
// axios.post('http://dblp.ourguide.xyz/papers/topic', {
//     group: [
//         "4be8eaca-a28a-4382-86c2-9314735066bd",
//         "7281e056-a2f6-4df3-bd54-fbd8ed8b737c",
//         "78efca65-ac1a-49bd-92ec-c8f0770fefb8",
//         "7d911d74-c4c1-4d4d-a737-5cf51e404c83",
//         "85bd9cc6-e41a-4fd4-8f3b-e776329efc4b",
//         "aa16086f-f3bf-432a-bfcd-9f1521c9ac52",
//         "cab91964-4e8d-4211-8d32-455cfd690b60",
//         "dc00221e-92c4-4ee4-8a7b-666ab5fd28c5",
//         "ea9489be-45f6-482f-937c-11b644d5f2ce",
//         "f258af24-e04a-49d4-86c3-1ab1c2f43914",
//         "fa96abdc-7c09-419b-a00d-4c24d5879eeb"
//     ],
//     value: "5"
//
// })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
