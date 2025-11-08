export class MarkdownTransformer {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  transform() {
    this.replaceUnorderedLists();
    this.replaceCaption();
    this.replaceHeadings();
    this.replaceBold();
    this.replaceCursive();
    this.replaceLinks();
    this.replaceSingleCode();
    this.replaceEveryoneMentions();

    return [
      this.text,
      "",
      "<em>Выслано из дискорд. Возможны ошибки форматирования</em>",
    ].join("\n");
  }

  private replaceUnorderedLists() {
    this.text = this.text.replaceAll(/^- (.*)/gm, "• $1");
  }

  private replaceBold() {
    this.text = this.text.replaceAll(
      /\*\*(\S.*?\S)\*\*/g,
      "<strong>$1</strong>"
    );
  }

  private replaceCursive() {
    this.text = this.text.replaceAll(
      /(?<!\*)\*(\S.*?\S)\*(?!\*)/g,
      "<em>$1</em>"
    );
  }

  private replaceLinks() {
    this.text = this.text.replaceAll(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2">$1</a>'
    );
  }

  private replaceSingleCode() {
    this.text = this.text.replaceAll(/\`(.*)\`/g, `<code>$1</code>`);
  }

  private replaceHeadings() {
    this.text = this.text.replaceAll(/^#{1,3} (.*)/gm, "<strong>$1</strong>");
  }

  private replaceCaption() {
    this.text = this.text.replaceAll(/^-# (.*)/gm, "<em>$1</em>");
  }

  private replaceEveryoneMentions() {
    this.text = this.text.replaceAll("@everyone", "");
  }

  public static transform(text: string) {
    return new MarkdownTransformer(text).transform();
  }
}
