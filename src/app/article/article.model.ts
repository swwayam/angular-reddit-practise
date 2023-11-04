export class Article{
    title !:string;
    link !: string;
    votesUp !: number;
    votesDown !: number;
    totalVotes !:  number;

    constructor (title: string, link: string, votesUp ?: number, votesDown ?: number){
        this.title = title;
        this.link = link;
        this.votesUp = votesUp || 0;
        this.votesDown = votesDown || 0;
        this.totalVotes = 0;
    }
    

    total(): void{
      this.totalVotes = this.votesUp - this.votesDown;
    }

    upvote() : void{
        this.votesUp += 1;
        this.total();
    }
    
      downvote(): void{
        this.votesDown += 1;
        this.total();
        
      }
}