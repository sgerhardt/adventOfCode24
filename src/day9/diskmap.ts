
export function blockFormat(input: string): string {
    // 12345 = 0..111....22222
    const files:file[] = []
    for (let i = 0; i < input.length-1; i+2){
        let f:file = {index: i, fullBlocks : Number(input[i]), emptyBlocks:Number(input[i+1])}
        files.push()
    }
    console.log(files)
    return "";
}

type file = {
    index: number
    fullBlocks: number
    emptyBlocks: number
}