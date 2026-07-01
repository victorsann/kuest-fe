function formatValue(value: string): string {
    switch (value) {
        case 'ALL':
            return 'Todas';
        case 'SOLVED':
            return 'Resolvidas';
        case 'RIGHT':
            return 'Acertos';
        case 'WRONG':
            return 'Erros';
        case 'OUTDATED':
            return 'Desatualizadas';
        case 'ANNULLED':
            return 'Anuladas';
        default:
            return value;
    }
}

export default formatValue;