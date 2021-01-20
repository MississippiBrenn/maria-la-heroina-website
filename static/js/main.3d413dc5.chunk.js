(this["webpackJsonpmaria-la-heroina-website"]=this["webpackJsonpmaria-la-heroina-website"]||[]).push([[0],{115:function(e,t,r){},122:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(0),n=r.n(a),i=r(12),s=r.n(i),o=(r(115),r(82)),j=r(52),l=r(53),b=r(62),d=r(61),u=r(168),h=r(169),O=r(84),p=r(161),f=r(175),m=r(167),x=r(165),g=r(166),_=r(164),v=r(81),w=r.n(v),y=(n.a.Component,function(e){return Object(c.jsx)(u.a,{position:"static",children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(O.a,{variant:"h4",color:"inherit",style:{flex:1},gutterBottom:!0,children:"Maria la Heroina"}),Object(c.jsx)(O.a,{variant:"h6",color:"inherit",style:{flex:1},gutterBottom:!0,children:"Maria is a tool for matching missing and unidentified women in the National Missing and Unidentified Persons System(NAMUS)."})]})})}),F=r(13),P=r(6),G=r(177),U=r(178),C=r(170),M=(r.p,r(70)),S=r.n(M),T=Object(P.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(G.a),H=Object(P.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expandIcon:{order:-1,margin:5},expanded:{}})(U.a),B=Object(P.a)((function(e){return{root:{padding:e.spacing(2)}}}))(C.a);function E(){var e=n.a.useState("panel1"),t=Object(F.a)(e,2),r=t[0],a=t[1],i=function(e){return function(t,r){a(!!r&&e)}};return Object(c.jsxs)("div",{children:[Object(c.jsxs)(T,{square:!0,expanded:"panel1"===r,onChange:i("panel1"),children:[Object(c.jsx)(H,{"aria-controls":"panel1d-content",id:"panel1d-header",expandIcon:Object(c.jsx)(S.a,{}),children:Object(c.jsx)(O.a,{children:"Working with Maria"})}),Object(c.jsx)(B,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:"instructions",children:[Object(c.jsx)("li",{children:"Thank Maria for all the work that she has done"}),Object(c.jsx)("li",{children:"Experience thoughts of joy and hope for the work Maria has accomplished"}),Object(c.jsx)("li",{children:"Take a few moments to silently or outloud tune in and express your how much her work has meant to you "}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:"After positively tuning our experience to the space of Maria, we are ready to continue"})," "]}),Object(c.jsx)("li",{children:"When you finish your work please close any tabs you have open utilising Maria and allow her to rest"})]})})})})]}),Object(c.jsxs)(T,{square:!0,expanded:"panel2"===r,onChange:i("panel2"),children:[Object(c.jsx)(H,{"aria-controls":"panel2d-content",id:"panel2d-header",expandIcon:Object(c.jsx)(S.a,{}),children:Object(c.jsx)(O.a,{children:"Searching with Maria"})}),Object(c.jsx)(B,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)("li",{children:"Maria already has filtered for possible matches based on age and date missing"}),Object(c.jsx)("li",{children:"Click on the title for a set of matches from the left panel"}),Object(c.jsx)("li",{children:"Optional: Enter in numbers from the NAMUS case number for the woman you are looking for"}),Object(c.jsx)("li",{children:"You now have a table with all potential matches from NAMUS"}),Object(c.jsx)("li",{children:" For ease of use, you are supplied the url from NAMUS"}),Object(c.jsx)("li",{children:"Visit the url provided(the case number is in the url) to further research the match"}),Object(c.jsx)("li",{children:"It is recommended you have an account with NAMUS.org to check already submitted matches"})]})})]})]})}var k=r(123),R=(r(176),r(171),r(172)),D=r(173),N=r(174),A=r(3),L=r(17),I=r(10),W=r.p+"static/media/uid_possible_matches_10_miles_with_race.6630160b.csv",$=[{Header:"NAMUS case",Footer:"NAMUS case",accessor:"case"},{Header:"Possible Matches",Footer:"Possible Matches",accessor:"possible_matches"}],q=(r(25),function(e){var t=e.filter,r=e.setFilter;return Object(c.jsx)("div",{children:Object(c.jsxs)("span",{children:["Search table using numbers only (ie 15993)"," ",Object(c.jsx)("input",{value:t||"",onChange:function(e){return r(e.target.value)}})]})})});var J=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){Object(L.a)(W).then(n)}),[]);var i=Object(a.useMemo)((function(){return $}),[]),s=Object(I.useTable)({columns:i,data:r},I.useGlobalFilter),o=s.getTableProps,j=s.getTableBodyProps,l=s.headerGroups,b=s.footerGroups,d=s.rows,u=s.prepareRow,h=s.state,O=s.setGlobalFilter,p=h.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:p,setFilter:O}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},o()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},j()),{},{children:d.map((function(e){return u(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})};var z=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){Object(L.a)(W).then(n)}),[]);var i=Object(a.useMemo)((function(){return $}),[]),s=Object(I.useTable)({columns:i,data:r},I.useGlobalFilter),o=s.getTableProps,j=s.getTableBodyProps,l=s.headerGroups,b=s.footerGroups,d=s.rows,u=s.prepareRow,h=s.state,O=s.setGlobalFilter,p=h.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:p,setFilter:O}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},o()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},j()),{},{children:d.map((function(e){return u(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})},V=r.p+"static/media/uid_possible_matches_50_miles_with_out_race.a937acf6.csv";var Y=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){Object(L.a)(V).then(n)}),[]);var i=Object(a.useMemo)((function(){return $}),[]),s=Object(I.useTable)({columns:i,data:r},I.useGlobalFilter),o=s.getTableProps,j=s.getTableBodyProps,l=s.headerGroups,b=s.footerGroups,d=s.rows,u=s.prepareRow,h=s.state,O=s.setGlobalFilter,p=h.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:p,setFilter:O}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},o()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},j()),{},{children:d.map((function(e){return u(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})},K=r.p+"static/media/uid_possible_matches_all_with_race.05c7e173.csv";var Q=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){Object(L.a)(K).then(n)}),[]);var i=Object(a.useMemo)((function(){return $}),[]),s=Object(I.useTable)({columns:i,data:r},I.useGlobalFilter),o=s.getTableProps,j=s.getTableBodyProps,l=s.headerGroups,b=s.footerGroups,d=s.rows,u=s.prepareRow,h=s.state,O=s.setGlobalFilter,p=h.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:p,setFilter:O}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},o()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},j()),{},{children:d.map((function(e){return u(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})},X=r.p+"static/media/uid_possible_matches_all_with_out_race_part_1.3bde49e3.csv";var Z=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){Object(L.a)(X).then(n)}),[]);var i=Object(a.useMemo)((function(){return $}),[]),s=Object(I.useTable)({columns:i,data:r},I.useGlobalFilter),o=s.getTableProps,j=s.getTableBodyProps,l=s.headerGroups,b=s.footerGroups,d=s.rows,u=s.prepareRow,h=s.state,O=s.setGlobalFilter,p=h.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:p,setFilter:O}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},o()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},j()),{},{children:d.map((function(e){return u(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})},ee=r.p+"static/media/uid_possible_matches_all_with_out_race_part_2.b951782c.csv";var te=function(){var e=Object(a.useState)([]),t=Object(F.a)(e,2),r=t[0],n=t[1];Object(a.useEffect)((function(){Object(L.a)(ee).then(n)}),[]);var i=Object(a.useMemo)((function(){return $}),[]),s=Object(I.useTable)({columns:i,data:r},I.useGlobalFilter),o=s.getTableProps,j=s.getTableBodyProps,l=s.headerGroups,b=s.footerGroups,d=s.rows,u=s.prepareRow,h=s.state,O=s.setGlobalFilter,p=h.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:p,setFilter:O}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},o()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},j()),{},{children:d.map((function(e){return u(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})};var re=function(e){var t=Object(a.useState)([]),r=Object(F.a)(t,2),n=r[0],i=r[1];Object(a.useEffect)((function(){Object(L.a)(e.csvInput).then(i)}),[]);var s=$,o=Object(I.useTable)({columns:s,data:n},I.useGlobalFilter),j=o.getTableProps,l=o.getTableBodyProps,b=o.headerGroups,d=o.footerGroups,u=o.rows,h=o.prepareRow,O=o.state,p=o.setGlobalFilter,f=O.globalFilter;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q,{filter:f,setFilter:p}),Object(c.jsxs)("table",Object(A.a)(Object(A.a)({},j()),{},{children:[Object(c.jsx)("thead",{children:b.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(A.a)(Object(A.a)({},e.getHeaderProps()),{},{children:[" ",e.render("Header")]}))}))}))}))}),Object(c.jsx)("tbody",Object(A.a)(Object(A.a)({},l()),{},{children:u.map((function(e){return h(e),Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))})),Object(c.jsx)("tfoot",{children:d.map((function(e){return Object(c.jsx)("tr",Object(A.a)(Object(A.a)({},e.getFooterGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsx)("td",Object(A.a)(Object(A.a)({},e.getFooterProps),{},{children:e.render("Footer")}))}))}))}))})]}))]})},ce=r.p+"static/media/uid_possible_matches_50_miles_with_race.6aa384b6.csv";var ae=function(e){var t=e.title;return Object(c.jsx)("div",{className:"container",children:function(){switch(t){case"Unidentified with race within 10 miles":return Object(c.jsx)(J,{});case"Unidentified without race within 10 miles":return Object(c.jsx)(z,{});case"Unidentified with race within 50 miles":return Object(c.jsx)(re,{csvInput:ce});case"Unidentified without race within 50 miles":return Object(c.jsx)(Y,{});case"Unidentified with race all matches":return Object(c.jsx)(Q,{});case"Unidentified without race all matches part 1":return Object(c.jsx)(Z,{});case"Unidentified without race all matches part 2":return Object(c.jsx)(te,{});default:return Object(c.jsx)("div",{})}}()})},ne={Paper:{padding:20,marginTop:10,marginBottom:20,height:500,overflow:"auto"}},ie=function(e){var t=e.matchDatabase,r=e.category,n=e.onSelect,i=e.matchDBEntry,s=(i.id,i.title),o=void 0===s?"Welcome, Please select a set of matches from the list on the left":s;return Object(c.jsxs)(R.a,{container:!0,children:[Object(c.jsx)(R.a,{item:!0,sm:!0,children:Object(c.jsx)(k.a,{style:ne.Paper,children:t.map((function(e){var t=Object(F.a)(e,2),i=t[0],s=t[1];return r&&r!==i?null:Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)(O.a,{variant:"h4",style:{textTransform:"capitalize"},children:i}),Object(c.jsx)(D.a,{component:"ul",children:s.map((function(e){var t=e.title,r=e.id;return Object(c.jsx)(N.a,{button:!0,onClick:function(){return n(r)},children:t},r)}))})]},i)}))})}),Object(c.jsx)(R.a,{item:!0,sm:!0,children:Object(c.jsx)(k.a,{style:ne.Paper,children:Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)(O.a,{variant:"h4",children:[o," "]}),Object(c.jsx)(O.a,{variant:"subtitle1",style:{marginTop:20}}),Object(c.jsx)(ae,{title:o})]})})})]})},se=[{id:1,title:"Unidentified with race within 10 miles",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_10_miles_with_race.csv",range:10,race:!0},{id:2,title:"Unidentified without race within 10 miles",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_10_miles_with_out_race.csv",range:10,race:!0},{id:3,title:"Unidentified with race within 50 miles",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_50_miles_with_race.csv",range:50,race:!0},{id:4,title:"Unidentified without race within 50 miles",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_50_miles_with_out_race.csv",range:50,race:!1},{id:5,title:"Unidentified with race all matches",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_all_with_race.csv",range:1e4,race:!0},{id:6,title:"Unidentified without race all matches part 1",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_all_with_out_race_part_1",range:1e4,race:!1},{id:7,title:"Unidentified without race all matches part 2",type:"Unidentified",csvLocation:"../../csvs/uid_possible_matches_all_with_out_race_part_2",range:1e4,race:!1}],oe=function(e){Object(b.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(j.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={matchDatabase:se,matchDBEntry:{}},e.handleCategorySelected=function(t){e.setState({category:t})},e.handleDBEntrySelected=function(t){e.setState((function(e){return{matchDBEntry:e.matchDatabase.find((function(e){return e.id===t}))}}))},e}return Object(l.a)(r,[{key:"getMatchByCategory",value:function(){return Object.entries(this.state.matchDatabase.reduce((function(e,t){var r=t.type;return e[r]=e[r]?[].concat(Object(o.a)(e[r]),[t]):[t],e}),{}))}},{key:"render",value:function(){var e=this.getMatchByCategory(),t=this.state,r=t.category,a=t.matchDBEntry;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{}),Object(c.jsx)(E,{}),Object(c.jsx)(ie,{matchDBEntry:a,category:r,matchDatabase:e,onSelect:this.handleDBEntrySelected})]})}}]),r}(a.Component),je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,180)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),c(e),a(e),n(e),i(e)}))};s.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(oe,{})}),document.getElementById("root")),je()},25:function(e,t,r){}},[[122,1,2]]]);
//# sourceMappingURL=main.3d413dc5.chunk.js.map