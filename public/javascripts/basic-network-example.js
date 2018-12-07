class NetworkManager {

    constructor() {

    }

    makeNetwork() {
        this.network = new vis.Network(container, data, options);
    }

    deleteNetwork() {
        if (!_.isNil(this.network)) {
            this.network.destroy()
        }
    }
}

// function makeNetwork([]) {
//
//     if(어쩌고)
//         network.destroy();
// }

// create an array with nodes
const nodes = new vis.DataSet([
    {id: 1, title: 'The Challenge of Information Visualization Evaluzation',
        color: 'hsl(251,69%,34%)', size: 35}, // label 프로퍼티가 있으면 노드 안에 제목이 됨
    {id: 2, title: '2', color: 'hsl(251,69%,40%)'},
    {id: 3, title: '3',color: 'hsl(251,69%,50%)'},
    {id: 4, title: '4', color: 'hsl(251,69%,55%)'},
    {id: 5, title: '5', color: 'hsl(251,69%,60%)'},
    {id: 6, title: '6', color: 'hsl(251,69%,70%)'},
    {id: 7, title: '7', color: 'hsl(251,69%,80%)'},
    {id: 8, title: '8', color: 'hsl(251,69%,90%)'},
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2, length: 70, width: 7},
    {from: 2, to: 4},
    {from: 2, to: 5, length: 70, width: 5},
    {from: 6, to: 1},
    {from: 7, to: 2},
    {from: 8, to: 3, length: 300},
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    nodes: {
        shape: 'dot', // circle 하면 크기 조절이 안됨
        size: 20,
        color: {
            background: 'skyblue',
            border: 'blue',
            highlight: {
                border: '#2B7CE9',
                background: '#D2E5FF'
            },
            hover: {
                border: 'red',
                background: 'yellow'
            }
        }
    },
    edges: {
        // arrows: 'to',
        // chosen: false,
        // color: {
        //     color: '#512da8',
        //     inherit: false // false 해줘야 노드의 색상이 적용되지 않는다.
        // },
        smooth: false
    },
    interaction: { // 드래그 되는지, 호버가 되는지 이런거
        hover: true,
        hoverConnectedEdges: false, // false 하면, node 색상이 잘 호버가 된다.
        tooltipDelay: 200,
        dragNodes: false
    }
};

// initialize your network!
var network = new vis.Network(container, data, options);
// network.destroy(); // network를 지운다. 화면에 안보임


network.on('afterDrawing', (canvas) => {
    console.log('canvas : ', canvas);
    // myCanvas.moveTo(0, 0);
    // myCanvas.lineTo(200, 100);
    // myCanvas.stroke();
    if (_.isEmpty(network.getSelectedNodes())) {
        console.log('asdf');
    }

});

// network.on('click', () => {
//     console.log('clicked');
//     console.log(network.getSelectedNodes());
// });



// network.setData({
//     nodes: [
//         {id: 1, title: '그룹장'}, // label 프로퍼티가 있으면 노드 안에 제목이 됨
//         {id: 2, title: '논문1'},
//         {id: 3},
//         {id: 4},
//         {id: 5},
//         {id: 6}
//     ]
// });

