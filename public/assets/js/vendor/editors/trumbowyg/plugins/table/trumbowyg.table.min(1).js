/* ===========================================================
 * trumbowyg.table.custom.js v2.0
 * Table plugin for Trumbowyg
 * http://alex-d.github.com/Trumbowyg
 * ===========================================================
 * Author : Sven Dunemann [dunemann@forelabs.eu]
 */
!function(e){"use strict";var t={rows:8,columns:8,styler:"table"};e.extend(!0,e.trumbowyg,{langs:{en:{table:"Insert table",tableAddRow:"Add row",tableAddRowAbove:"Add row above",tableAddColumnLeft:"Add column to the left",tableAddColumn:"Add column to the right",tableDeleteRow:"Delete row",tableDeleteColumn:"Delete column",tableDestroy:"Delete table",error:"Error"},cs:{table:"Vytvořit příkaz Table",tableAddRow:"Přidat řádek",tableAddRowAbove:"Přidat řádek",tableAddColumnLeft:"Přidat sloupec",tableAddColumn:"Přidat sloupec",error:"Chyba"},da:{table:"Indsæt tabel",tableAddRow:"Tilføj række",tableAddRowAbove:"Tilføj række",tableAddColumnLeft:"Tilføj kolonne",tableAddColumn:"Tilføj kolonne",tableDeleteRow:"Slet række",tableDeleteColumn:"Slet kolonne",tableDestroy:"Slet tabel",error:"Fejl"},de:{table:"Tabelle einfügen",tableAddRow:"Zeile hinzufügen",tableAddRowAbove:"Zeile hinzufügen",tableAddColumnLeft:"Spalte hinzufügen",tableAddColumn:"Spalte hinzufügen",tableDeleteRow:"Zeile löschen",tableDeleteColumn:"Spalte löschen",tableDestroy:"Tabelle löschen",error:"Error"},et:{table:"Sisesta tabel",tableAddRow:"Lisa rida",tableAddRowAbove:"Lisa rida üles",tableAddColumnLeft:"Lisa tulp vasakule",tableAddColumn:"Lisa tulp paremale",tableDeleteRow:"Kustuta rida",tableDeleteColumn:"Kustuta tulp",tableDestroy:"Kustuta tabel",error:"Viga"},fr:{table:"Insérer un tableau",tableAddRow:"Ajouter des lignes",tableAddRowAbove:"Ajouter des lignes",tableAddColumnLeft:"Ajouter des colonnes",tableAddColumn:"Ajouter des colonnes",tableDeleteRow:"Effacer la ligne",tableDeleteColumn:"Effacer la colonne",tableDestroy:"Effacer le tableau",error:"Erreur"},hu:{table:"Táblázat beszúrás",tableAddRow:"Sor hozzáadás",tableAddRowAbove:"Sor beszúrás fönt",tableAddColumnLeft:"Sor beszúrás balra",tableAddColumn:"Sor beszúrás jobbra",tableDeleteRow:"Sor törlés",tableDeleteColumn:"Oszlop törlés",tableDestroy:"Táblázat törlés",error:"Hiba"},id:{table:"Sisipkan tabel",tableAddRow:"Sisipkan baris",tableAddRowAbove:"Sisipkan baris",tableAddColumnLeft:"Sisipkan kolom",tableAddColumn:"Sisipkan kolom",tableDeleteRow:"Hapus baris",tableDeleteColumn:"Hapus kolom",tableDestroy:"Hapus tabel",error:"Galat"},ja:{table:"表の挿入",tableAddRow:"行の追加",tableAddRowAbove:"行の追加",tableAddColumnLeft:"列の追加",tableAddColumn:"列の追加",error:"エラー"},ko:{table:"표 넣기",tableAddRow:"줄 추가",tableAddRowAbove:"줄 추가",tableAddColumnLeft:"칸 추가",tableAddColumn:"칸 추가",tableDeleteRow:"줄 삭제",tableDeleteColumn:"칸 삭제",tableDestroy:"표 지우기",error:"에러"},pt_br:{table:"Inserir tabela",tableAddRow:"Adicionar linha",tableAddRowAbove:"Adicionar linha",tableAddColumnLeft:"Adicionar coluna",tableAddColumn:"Adicionar coluna",tableDeleteRow:"Deletar linha",tableDeleteColumn:"Deletar coluna",tableDestroy:"Deletar tabela",error:"Erro"},ru:{table:"Вставить таблицу",tableAddRow:"Добавить строку",tableAddRowAbove:"Добавить строку",tableAddColumnLeft:"Добавить столбец",tableAddColumn:"Добавить столбец",tableDeleteRow:"Удалить строку",tableDeleteColumn:"Удалить столбец",tableDestroy:"Удалить таблицу",error:"Ошибка"},sk:{table:"Vytvoriť tabuľky",tableAddRow:"Pridať riadok",tableAddRowAbove:"Pridať riadok",tableAddColumnLeft:"Pridať stĺpec",tableAddColumn:"Pridať stĺpec",error:"Chyba"},tr:{table:"Tablo ekle",tableAddRow:"Satır ekle",tableAddRowAbove:"Yukarıya satır ekle",tableAddColumnLeft:"Sola sütun ekle",tableAddColumn:"Sağa sütun ekle",tableDeleteRow:"Satırı sil",tableDeleteColumn:"Sütunu sil",tableDestroy:"Tabloyu sil",error:"Hata"},zh_tw:{table:"插入表格",tableAddRow:"加入行",tableAddRowAbove:"加入行",tableAddColumnLeft:"加入列",tableAddColumn:"加入列",tableDeleteRow:"刪除行",tableDeleteColumn:"刪除列",tableDestroy:"刪除表格",error:"錯誤"},es:{table:"Insertar tabla",tableAddRow:"Agregar fila",tableAddRowAbove:"Agregar fila arriba",tableAddColumnLeft:"Agregar columna a la izquierda",tableAddColumn:"Agregar columna a la derecha",tableDeleteRow:"Borrar fila",tableDeleteColumn:"Borrar columna",tableDestroy:"Borrar tabla",error:"Error"}},plugins:{table:{init:function(l){l.o.plugins.table=e.extend(!0,{},t,l.o.plugins.table||{});var a={fn:function(){l.saveRange();var t="table",a=l.o.prefix+"dropdown",n={class:a+"-"+"table "+a+" "+l.o.prefix+"fixed-top"};n["data-"+a]=t;var b=e("<div/>",n);if(0===l.$box.find("."+a+"-"+t).length?l.$box.append(b.hide()):b=l.$box.find("."+a+"-"+t),b.html(""),l.$box.find("."+l.o.prefix+"table-button").hasClass(l.o.prefix+"active-button"))b.append(l.buildSubBtn("tableAddRowAbove")),b.append(l.buildSubBtn("tableAddRow")),b.append(l.buildSubBtn("tableAddColumnLeft")),b.append(l.buildSubBtn("tableAddColumn")),b.append(l.buildSubBtn("tableDeleteRow")),b.append(l.buildSubBtn("tableDeleteColumn")),b.append(l.buildSubBtn("tableDestroy"));else{var r=e("<table/>");e("<tbody/>").appendTo(r);for(var i=0;i<l.o.plugins.table.rows;i+=1)for(var s=e("<tr/>").appendTo(r),u=0;u<l.o.plugins.table.columns;u+=1)e("<td/>").appendTo(s);r.find("td").on("mouseover",o),r.find("td").on("mousedown",d),b.append(r),b.append(e('<div class="trumbowyg-table-size">1x1</div>'))}l.dropdown(t)}},o=function(t){var l=e(t.target).closest("table"),a=this.cellIndex,o=this.parentNode.rowIndex;l.find("td").removeClass("active");for(var d=0;d<=o;d+=1)for(var n=0;n<=a;n+=1)l.find("tr:nth-of-type("+(d+1)+")").find("td:nth-of-type("+(n+1)+")").addClass("active");l.next(".trumbowyg-table-size").html(a+1+"x"+(o+1))},d=function(){l.saveRange();var t=e("<table/>");e("<tbody/>").appendTo(t),l.o.plugins.table.styler&&t.attr("class",l.o.plugins.table.styler);for(var a=this.cellIndex,o=this.parentNode.rowIndex,d=0;d<=o;d+=1)for(var n=e("<tr></tr>").appendTo(t),b=0;b<=a;b+=1)e("<td/>").appendTo(n);l.range.deleteContents(),l.range.insertNode(t[0]),l.$c.trigger("tbwchange")},n={title:l.lang.tableAddRow,text:l.lang.tableAddRow,ico:"row-below",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,a=e(t).closest("tr"),o=e(t).closest("table");if(o.length>0){for(var d=e("<tr/>"),n=0;n<o.find("tr")[0].childElementCount;n+=1)e("<td/>").appendTo(d);a.after(d)}l.syncCode()}},b={title:l.lang.tableAddRowAbove,text:l.lang.tableAddRowAbove,ico:"row-above",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,a=e(t).closest("tr"),o=e(t).closest("table");if(o.length>0){for(var d=e("<tr/>"),n=0;n<o.find("tr")[0].childElementCount;n+=1)e("<td/>").appendTo(d);a.before(d)}l.syncCode()}},r={title:l.lang.tableAddColumn,text:l.lang.tableAddColumn,ico:"col-right",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,a=e(t).closest("td"),o=e(t).closest("table"),d=a.index();o.length>0&&e(o).find("tr").each((function(){e(e(this).children()[d]).after("<td></td>")})),l.syncCode()}},i={title:l.lang.tableAddColumnLeft,text:l.lang.tableAddColumnLeft,ico:"col-left",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,a=e(t).closest("td"),o=e(t).closest("table"),d=a.index();o.length>0&&e(o).find("tr").each((function(){e(e(this).children()[d]).before("<td></td>")})),l.syncCode()}},s={title:l.lang.tableDestroy,text:l.lang.tableDestroy,ico:"table-delete",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode;e(t).closest("table").remove(),l.syncCode()}},u={title:l.lang.tableDeleteRow,text:l.lang.tableDeleteRow,ico:"row-delete",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode;e(t).closest("tr").remove(),l.syncCode()}},f={title:l.lang.tableDeleteColumn,text:l.lang.tableDeleteColumn,ico:"col-delete",fn:function(){l.saveRange();var t=l.doc.getSelection().focusNode,a=e(t).closest("table"),o=e(t).closest("td").index();e(a).find("tr").each((function(){e(this).find("td:eq("+o+")").remove()})),l.syncCode()}};l.addBtnDef("table",a),l.addBtnDef("tableAddRowAbove",b),l.addBtnDef("tableAddRow",n),l.addBtnDef("tableAddColumnLeft",i),l.addBtnDef("tableAddColumn",r),l.addBtnDef("tableDeleteRow",u),l.addBtnDef("tableDeleteColumn",f),l.addBtnDef("tableDestroy",s)}}}})}(jQuery);