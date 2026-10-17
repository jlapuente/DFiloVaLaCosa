import { MdToHtmlPipe } from './md-to-html.pipe';

describe('MdToHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new MdToHtmlPipe();
    expect(pipe).toBeTruthy();
  });

  it('renders inline markdown formatting', () => {
    const pipe = new MdToHtmlPipe();

    expect(pipe.transform('_texto_', true)).toContain('<em>texto</em>');
  });
});
