import { Component } from '@angular/core';<% if (mockedData) {%>
import { seriesData } from './data'; <% } %><% if (showLabels) {%>
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';<% } %><% if (legendTitleText || legendTitleAlign || legendTitlePosition) {%>
import { LegendTitle } from '@progress/kendo-angular-charts';<% } %>

@Component({
	selector: '<%= dasherize(name) %>-component',
	templateUrl: './<%= dasherize(name) %>.component.html',
	<% if (!inlineStyle) {%>styleUrls: ['./<%= dasherize(name) %>.component.css']<% } else {%>styles: [``]<% } %>
})
export class <%= classify(name) %>Component {
	<% if (mockedData) { %>public seriesData: any[] = seriesData;<%}%><% if (showLabels) {%>
    public labelContent: (args: SeriesLabelsContentArgs) => string = (args: SeriesLabelsContentArgs) => args.category;<% } %><% if (legendTitleText || legendTitleAlign || legendTitlePosition) {%>
    public legendTitle: LegendTitle = {<% if (legendTitleText) {%>
        text: '<%=legendTitleText%>',<% } %><% if (legendTitleAlign) {%>
        align: '<%=legendTitleAlign%>',<% } %><% if (legendTitlePosition) {%>
        position: '<%=legendTitlePosition%>'<% } %>
    };<% } %>
}
