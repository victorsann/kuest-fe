export function formatDate(date: string) { // 2015-03-25T12:00:00Z

    const formatted = date?.split('T')[0];
    const splitted = formatted?.split('-')?.reverse();

    switch (splitted[1]) {
        case '01': return `${splitted[0]} de janeiro de ${splitted[2]}`
        case '02': return `${splitted[0]} de fevereiro de ${splitted[2]}`
        case '03': return `${splitted[0]} de março de ${splitted[2]}`
        case '04': return `${splitted[0]} de abril de ${splitted[2]}`
        case '05': return `${splitted[0]} de maio de ${splitted[2]}`
        case '06': return `${splitted[0]} de junho de ${splitted[2]}`
        case '07': return `${splitted[0]} de julho de ${splitted[2]}`
        case '08': return `${splitted[0]} de agosto de ${splitted[2]}`
        case '09': return `${splitted[0]} de setembro de ${splitted[2]}`
        case '10': return `${splitted[0]} de outubro de ${splitted[2]}`
        case '11': return `${splitted[0]} de novembro de ${splitted[2]}`
        case '12': return `${splitted[0]} de dezembro de ${splitted[2]}`
        default:
            return ''
    }


}


