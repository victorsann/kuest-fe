function formatKey(key: string): string {
    switch (key) {
        case 'keyWord':
            return 'Plavra chave';
        case 'subjects':
            return 'Disciplina';
        case 'topics':
            return 'Assunto';
        case 'boards':
            return 'Banca';
        case 'roles':
            return 'Cargo';
        case 'exams':
            return 'Concurso';
        case 'years':
            return 'Ano';
        case 'exceptions':
            return 'Excluir';
        case 'listOption':
            return 'Listar questões';
        default:
            return key;
    }
}

export default formatKey;