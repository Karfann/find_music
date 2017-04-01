export interface News {
    id: string;
    headline: string;
    kicker: string;
    url: string;
    inserted: string;
    modified: string;
    pic_src: string;
    pic_width: string;
    pic_height: string;
    pic_caption: string;
    tags: Array<string>;
}


// newsContém informações das notícias do Vagalume:
// headline - Título da notícia
// kicker - Chamada para a notícia
// url - URL da notícia no Vagalume
// inserted - Data de inserção da notícia no Vagalume (Formato: dd-mm-aaaa hh:mm:ss)
// modified - Data da última modificação da notícia no Vagalume (Formato: dd-mm-aaaa hh:mm:ss)
// pic_src - URL da imagem da notícia
// pic_width - Largura da imagem da notícia (em pixels)
// pic_height - Altura da imagem da notícia (em pixels)
// pic_caption - Legenda da imagem da notícia (se houver)
// tags - Lista de tags relacionadas à notícia 