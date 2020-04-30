export class Submistest {
    // Class and constructor

    public submitestId!: number;
    public surveyId!: number;
    public topic_title!: string[];
    public max_quote_topic!: string[];
    public quote_result_survey!: string[];



    constructor(input: Submistest) {
        Object.assign(this, input);
    }
}
