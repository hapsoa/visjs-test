class NetworkManager {

    constructor() {
    }

    async makeNetwork() {
        if (_.isNil(this.network)) {
            const response = await axios.post('http://dblp.ourguide.xyz/papers/network', {
                group: [
                    "4be8eaca-a28a-4382-86c2-9314735066bd",
                    "7281e056-a2f6-4df3-bd54-fbd8ed8b737c",
                    "78efca65-ac1a-49bd-92ec-c8f0770fefb8",
                    "7d911d74-c4c1-4d4d-a737-5cf51e404c83",
                    "85bd9cc6-e41a-4fd4-8f3b-e776329efc4b",
                    "aa16086f-f3bf-432a-bfcd-9f1521c9ac52",
                    "cab91964-4e8d-4211-8d32-455cfd690b60",
                    "dc00221e-92c4-4ee4-8a7b-666ab5fd28c5",
                    "ea9489be-45f6-482f-937c-11b644d5f2ce",
                    "f258af24-e04a-49d4-86c3-1ab1c2f43914",
                    "fa96abdc-7c09-419b-a00d-4c24d5879eeb"

                ]
            });

            const networkData = response.data;
            console.log('networkData : ', networkData);

            // networkData를 다시 내 입맛에 맞게 정제한다.

            // this.network = new vis.Network(container, data, options);
        }
    }

    deleteNetwork() {
        if (!_.isNil(this.network)) {
            this.network.destroy();
            this.network = null;
        }
    }
}

const networkManager = new NetworkManager();
networkManager.makeNetwork();
