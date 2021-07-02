

export type TaskType={
    title:string
    description:string
} 
export type BoardType={
    title:string
    tasks:TaskType[]
}
export type ListType={
    title:string
    boards:BoardType[]
} //0 - Name board, 1 - array elements board
