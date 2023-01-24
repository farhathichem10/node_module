export interface SchemaScatter {
    path?: string;
    name: string;
    inlineStyle: boolean;
    inlineTemplate: boolean;
    skipTests: boolean;
    titleText?: string;
    titlePosition?: 'top' | 'bottom';
    titleAlign?: 'left' | 'right' | 'center';
    renderAs?: 'canvas' | 'svg';
    series?: string;
    categoryAxis?: string;
    valueAxis?: string;
    legend?: boolean;
    legendTitleText?: string;
    legendTitleAlign?: 'left' | 'right' | 'center';
    legendTitlePosition?: 'top' | 'bottom';
    legendAlign?: 'center' | 'start' | 'end';
    legendOrientation?: 'vertical' | 'horizontal';
    legendPosition?: 'top' | 'bottom' | 'left' | 'right' | 'custom';
    dataPath?: string;
    dataName: string;
    mockedData?: boolean;
    dataSourceType?: string;
    dataSourceModule?: string;
    dataSourceMember?: string;
    dataSourceMethod?: string;
}
