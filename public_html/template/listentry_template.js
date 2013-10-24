/**
 * This file represents the Template for
 * a List Item in the Master Movie List
 */

var listitem_template = "<% _.each(rc.listItems, function(listItem){ %>";
listitem_template += "<tr>";
    listitem_template += "<td>";
        listitem_template += "<% listItem.id %>";
    listitem_template += "</td>";
    listitem_template += "<td>";
        listitem_template += "<% listItem.prename %>";
    listitem_template += "</td>";
    listitem_template += "<td>";
        listitem_template += "<% listItem.lastname %>";
    listitem_template += "</td>";
    listitem_template += "<td>";
        listitem_template += "<% listItem.grade %>";
    listitem_template += "</td>";
listitem_template += "</tr>";
listitem_template += "<% }); %>";



