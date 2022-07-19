export abstract class AbstractSolution {
    problem: string | undefined;

    run(): void {
        if (this.problem) {
            console.log('Solving ' + this.problem);
        }
        console.log(this.solve());
    }

    abstract solve(): any;
}
