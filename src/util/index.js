/**
 *
 * @param value
 * @returns {boolean|boolean}
 */
export function isNotEmpty(value) {
  return value !== undefined && value != null && value !== '' && (value + '').trim().length !== 0
}

/**
 * 获取文件图标
 * @param fileType
 * @returns {string}
 */
export function getFileIcon(fileType) {
  if (fileType === 'folder') {
    return 'fa fa-folder'
  } else {
    return 'fa fa-file-' + fileType + '-o'
  }
}

/**
 * 获取文件颜色
 * @param fileType
 * @returns {string}
 */
export function getFileColor(fileType) {
  switch (fileType) {
    case 'word':
      return '#409eff'
    case 'excel':
      return '#72dca2'
    case 'pdf':
      return '#ff7398'
    default:
      return '#ffe17b'
  }
}

/**
 * 判断是否为文件夹
 * @param fileType
 * @returns {boolean}
 */
export function isFolder(fileType) {
  return fileType === 'folder'
}

/**
 * 获取文件右键菜单
 * @param fileType
 * @returns {*[]}
 */
export function getFileContextMenu(fileType) {
  return fileType === 'folder' ? [
    {
      text: '分享',
      icon: 'fa fa-share-alt'
    },
    {
      text: '下载',
      icon: 'fa fa-cloud-download'
    },
    {
      text: '移动',
      icon: 'fa fa-minus-square-o'
    },
    {
      text: '复制',
      icon: 'fa fa-copy'
    },
    {
      text: '删除',
      icon: 'fa fa-trash-o'
    },
    {
      text: '重命名',
      icon: 'fa fa-minus-square-o'
    },
    {
      text: '属性',
      icon: 'fa fa-cog fa-fw'
    },
    {
      text: '更多',
      children: [{
        text: '添加常用'
      }, {
        text: '编辑标签'
      }]
    }
  ] : [
    {
      text: '分享',
      icon: 'fa fa-share-alt'
    },
    {
      text: '下载',
      icon: 'fa fa-cloud-download'
    },
    {
      text: '编辑',
      icon: 'fa fa-pencil-square-o'
    },
    {
      text: '移动',
      icon: 'fa fa-minus-square-o'
    },
    {
      text: '复制',
      icon: 'fa fa-copy'
    },
    {
      text: '删除',
      icon: 'fa fa-trash-o'
    },
    {
      text: '重命名',
      icon: 'fa fa-minus-square-o'
    },
    {
      text: '属性',
      icon: 'fa fa-cog fa-fw'
    },
    {
      text: '更多',
      children: [{
        text: '查看历史版本'
      }, {
        text: '添加常用'
      }, {
        text: '编辑标签'
      }]
    }
  ]
}

// 组装条件组件的组成的表单值
export function getFormData(data) {
  const fromData = {}
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      fromData[key] = data[key].modelValue || ''
    }
  }
  return fromData
}
