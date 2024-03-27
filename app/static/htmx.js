function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";  /* reload window once send request for deletion has come back, reload home */
  });
}

function deleteLanguage(languageId) {
  fetch("/delete-language", {
    method: 'POST',
    body: JSON.stringify({ languageId: languageId }),
  }).then((_res) => {
    window.location.href = "/admin";
  });
}

function deleteCode(codeId) {
  fetch("/delete-code", {
    method: 'POST',
    body: JSON.stringify({ codeId: codeId }),
  }).then((_res) => {
    window.location.href = "/view_code";
  });
}