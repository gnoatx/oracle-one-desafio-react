export enum Category {
    'Front End',
    'Back End',
    'Mobile'
}

export class Video {
    constructor(
        private _title: string,
        private _category: string,
        private _imagePath: string,
        private _videoUrl: string,
        private _description: string
    ) {}

    get title() { return this._title }
    set title(title: string) { this._title = title }

    get category() { return this._category }
    set category(category: string) { this._category = category }

    get imagePath() { return this._imagePath }
    set imagePath(imagePath: string) { this._imagePath = imagePath }

    get videoUrl() { return this._videoUrl }
    set videoUrl(videoUrl: string) { this._videoUrl = videoUrl }

    get description() { return this._description }
    set description(description: string) { this._description = description }
}