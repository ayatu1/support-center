//将一些数据属性自动保存到浏览器本地存储中，并在创建组件时恢复。以防浏览器崩溃，或用户意外刷新页面
//id：字符串，需要存储数据的组件的组件名，即是存储此特定组件数据的唯一标识符
//fields：数组，需要将值存储到本地的选项名
export default function (id, fields) {
    return {
        //组件创建时恢复值  ['title', 'description']
        created() {
            for(const field of fields) {  //'title'
                const savedValue = localStorage.getItem(`${id}.${field}`)
                if(savedValue !== null) {
                    this[field] = JSON.parse(savedValue)
                }
            }
        },
        //通过reduce函数返回一个对象给watch，此对象键为需要监听的选项，值为函数(用来将数据存储到本地)，
        watch: fields.reduce((obj, field) => {
                    obj[field] = function (val) {   //当选项值发生变化时自动获取val
                        localStorage.setItem(`${id}.${field}`, JSON.stringify(val))
                    }
                    return obj
                }, {})
    }
}