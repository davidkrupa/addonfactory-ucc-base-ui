import styled from 'styled-components';
import { variables } from '@splunk/themes';

export const TitleComponent = styled.div.attrs({
    className: 'pageTitle',
})`
    &.page-title {
        font-size: ${variables.fontSizeXXLarge};
        margin-bottom: 20px;
    }
`;

export const SubTitleComponent = styled.div.attrs({
    className: 'pageSubtitle',
})`
    &.page-subtitle {
        font-size: ${variables.fontSize};
        margin-bottom: 10px;
    }
`;

export const TableCaptionComponent = styled.div`
    .table-caption-inner {
        text-align: left;
    }
`;
