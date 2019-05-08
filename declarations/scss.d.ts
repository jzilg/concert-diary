// define ts modules for file imports
// otherwise ts compiler complains when importing some file types

declare module '*.scss' {
    const content: any
    export default content
}
