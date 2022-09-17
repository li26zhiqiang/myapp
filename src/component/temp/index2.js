

export default function (tasks, n) {
    let Q = {};
    tasks.forEach(item => {
        if (Q[item]) {
            Q[item] ++;
        } else {
            Q[item] = 1;
        }
    });
    const keys = Object.keys(Q)
    console.log('keys', keys)

    for (let i = 0; i<n;i++) {
        let max = 0;
        let key;
        let pos;

        keys.forEach((e, index) => {
            if (Q[e]>max) {
                max = Q[e];
                key = e;
                pos = index;
            }
        })
    }
}