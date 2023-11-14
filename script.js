document.getElementById('issueInputForm').addEventListener('submit', saveIssue);
function saveNew(e) {
var issueId = chance.guid();
var issueDesc=document.getElementById('issueDescInput").value;
var issueSeverity = document.getElementById("issueSeverityInput').value;
var issueAssignedTo= document.getElementById('issueAssigned ToInput').value;
}
var issueStatus = 'Pending';

var issue = {
id: issueId,
description: issueDesc,
severity: issueSeverity,
assignedTo: issueAssignedTo,
status: issueStatus
}
if (localStorage.getItem("issues") === null) {

var issues = [];

issues.push(issue);

localStorage.setItem("issues", JSON.stringify(issues));

} else {

var issues = JSON.parse(localStorage.getItem("issues"));

issues.push(issue);

localStorage.setItem("issues", JSON.stringify(issues));

document.getElementById("issueInputForm').reset();

fetchIssues();
e.preventDefault();

} 32

function setStatusClosed (id) {

var issues = JSON.parse(localStorage.getItem("issues"));

localStorage.setItem('issues', JSON.stringify(issues));
fetchIssues();
function deleteIssue (id) {
var issues = JSON.parse(localStorage.getItem("issues");
for (var i = 0; i < issues.length; i++) {

if (issues[i].id id); {
issues.splice(1, 1);
}
}
}
{
 localStorage.setItem('issues, JSON.stringify(issues));
 fetchIssues();
}