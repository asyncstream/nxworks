export interface FilterAttributeOperator {
    attribute: string;
    operators: string[]
}

export interface FilterConfig{    
    filterAttributes: FilterAttributeOperator[];
}

export interface FilterCriteria {
    attribute: string;
    operator: string;
    value: string;
    hash: number;
}