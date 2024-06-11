class TeamMember{
    private name: string;
    private role: string;
    private img: string;
    private links: Array<Links>;

    constructor(name: string, role: string, img: string, links: Array<Links>){
        this.name = name;
        this.role = role;
        this.img = img;
        this.links = links;
    }

    public getName(): string{
        return this.name;
    }

    public getRole(): string{
        return this.role;
    }

    public getImg(): string{
        return this.img;
    }

    public getLinks(): Array<Links>{
        return this.links;
    }

    public addLink(link: Links): void{
        this.links.push(link);
    }

    public removeLink(link: Links): void{
        let index = this.links.indexOf(link);
        if(index > -1){
            this.links.splice(index, 1);
        }
    }

    public updateLink(link: Links, newLink: Links): void{
        let index = this.links.indexOf(link);
        if(index > -1){
            this.links[index] = newLink;
        }
    }

    public updateName(name: string): void{
        this.name = name;
    }

    public updateRole(role: string): void{
        this.role = role;
    }

    public updateImg(img: string): void{
        this.img = img;
    }

    public updateLinks(links: Array<Links>): void{
        this.links = links;
    }

    public toString(): string{
        return `Name: ${this.name}, Role: ${this.role}, Image: ${this.img}, Links: ${this.links}`;
    }
}

class Links{
    private id: string;
    private lable: string;
    private url: string;
    private viewBox: string;
    private path: string;

    constructor(id: string, label:string, url: string, viewBox: string, path: string){
        this.id = id;
        this.lable = label;
        this.url = url;
        this.viewBox = viewBox;
        this.path = path;
    }

    public getId(): string{
        return this.id;
    }

    public getUrl(): string{
        return this.url;
    }

    public getViewBox(): string{
        return this.viewBox;
    }

    public getPath(): string{
        return this.path;
    }

    public updateId(id: string): void{
        this.id = id;
    }

    public updateUrl(url: string): void{
        this.url = url;
    }

    public updateViewBox(viewBox: string): void{
        this.viewBox = viewBox;
    }

    public updatePath(path: string): void{
        this.path = path;
    }

    public toString(): string{
        return `ID: ${this.id}, URL: ${this.url}, ViewBox: ${this.viewBox}, Path: ${this.path}`;
    }
}