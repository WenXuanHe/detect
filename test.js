a = {
    complexClassifiers: [{
        simpleClassifiers: [{
            left_val: '',
            right_val: '',
            threshold: '',
            features: [[0], [1]]
        }],
        threshold: ''
    }]
}

b = {
    stages: [{
        stage_threshold: '',
        trees:[
            [{
                left_val: '',
                right_val: '',
                threshold: '',
                feature:{
                    rects: [[0], [1]],
                    tilted
                }
        }]
    ]
    }]
}

b.stages.map(item => {
    return {
        threshold: Number(item.stage_threshold),
        simpleClassifiers: item.trees.map(it => {
            it[0].left_val = Number(it[0].left_val)
            it[0].right_val = Number(it[0].right_val)
            it[0].threshold = Number(it[0].threshold)
            it[0].feature = it[0].feature.rects.map(item => {
                return item.split(/\s+/).map(it => Number(it ))
            })
            return it[0]
        })
    }
})

