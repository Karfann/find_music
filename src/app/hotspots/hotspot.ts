export interface Hotspot {
    id: string;
    title: string;
    date: string;
    date_fmt: string;
    link: string;
    descr: string;
    pic_src: string;
    pic_width: string;
    pic_height: string;
    type: string
}

// id - ID do hotspot
// title - Título do hotspot
// date - Data de inserção do hotspot no Vagalume (Formato: dd-mm-aaaa hh:mm:ss)
// date_fmt - Data de inserção do hotspot no Vagalume (Formato: dd-MMM-aaaa)
// link - URL do hotspot no Vagalume
// descr - Descrição do hotspot
// pic_src - URL da imagem do hotspot
// pic_width - Largura da imagem do hotspot (em pixels)
// pic_height - Altura da imagem do hotspot (em pixels)
// type - Tipo de página que o usuário será redirecionado. Pode ser uma de letra de música (music), uma playlist do Meu Vagalume            (playlist), uma notícia (news), ou outra página qualquer (other). Nos casos de "music" ou "playlist", será informado               também um ID, conforme lista abaixo:
// musicIDSe o hotspot é referente a uma letra de música, este campo informa o ID da letra
// playlistIDSe o hotspot é referente a uma playlist do Meu Vagalume, este campo informa o ID da playlist
