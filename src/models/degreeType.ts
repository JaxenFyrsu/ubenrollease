export class DegreeType {
    constructor(
        public readonly code: string,       // e.g. 'AINT'
        public readonly name: string,       // e.g. 'Associates in IT'
        public readonly level: string,      // e.g. 'Associates'
        public readonly department: string
    ) {}
}