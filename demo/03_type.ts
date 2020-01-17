export { };
let list: number[] = [1, 2, 3]
let x: [string, number] = ['aa', 2]

x[0].slice(1)
// x[1].slice(1)
// x[3] = 3  元组 Tuple  v3.1之后 长度也是要一致的；官网例子未更新

let notSure:any = 4
notSure = 'ss'

// void 不返回任何值

// 子类型可以赋值给父类型
// 默认情况下null和undefined是所有类型的子类型。 
// 就是说你可以把null和undefined赋值给number类型的变量。