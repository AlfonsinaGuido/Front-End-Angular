export class Skills {
    id: number;
    nameSkill: string;
    progress: number;
    imgSkill: string;

    constructor(nameSkill: string, progress: number, imgSkill: string){
        this.nameSkill = nameSkill;
        this.progress = progress;
        this.imgSkill = imgSkill;
    }



}
