const getPinnedData = (data, pinned, type) => {
  if (!data.length) return [{...pinned}]
  if (type === 'delete') return data.filter(el => el.id !== pinned.id)
  if (type === 'add') return [...data, {...pinned}]
}

export default getPinnedData