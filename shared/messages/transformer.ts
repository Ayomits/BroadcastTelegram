export class MarkdownTransformer {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  transform(): string {
    this.replaceHeadings();
    this.replaceUnorderedLists();

    return this.text;
  }

  private replaceUnorderedLists() {
    this.text = this.text.replaceAll(/^- (.*)/gm, "");
  }

  private replaceHeadings() {
    this.text = this.text.replaceAll(/^#{1,3} (.*)/gm, "*$1*");
  }
}
