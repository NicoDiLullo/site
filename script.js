document.querySelectorAll('.folder-container').forEach(folderContainer => {
    folderContainer.addEventListener('mousedown', function(e) {
      let offsetX = e.clientX - folderContainer.offsetLeft;
      let offsetY = e.clientY - folderContainer.offsetTop;
  
      function moveAt(event) {
        folderContainer.style.left = event.clientX - offsetX + 'px';
        folderContainer.style.top = event.clientY - offsetY + 'px';
      }
  
      function stopDrag() {
        document.removeEventListener('mousemove', moveAt);
        document.removeEventListener('mouseup', stopDrag);
      }
  
      document.addEventListener('mousemove', moveAt);
      document.addEventListener('mouseup', stopDrag);
    });
  
    const folder = folderContainer.querySelector('.folder');
    folder.addEventListener('dblclick', function() {
      const url = folder.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
  
  const reloadButton = document.getElementById('reload-button');
  reloadButton.addEventListener('click', function() {
    location.reload();
  });
  