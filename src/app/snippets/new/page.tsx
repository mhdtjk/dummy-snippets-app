
export default function page() {
  return (
    <form>
      <div className='flex flex-col gap-4'>
        <h3 className="font-bold">Create new snippet:</h3>
        <div className='flex gap-4'>
          <label htmlFor="title" className='w-1/12'>title:</label>
          <input name='title' type="text" id='title' className='border rounded p-2 w-full' />
        </div>
        <div className='flex gap-4'>
          <label htmlFor="code" className='w-1/12'>Code:</label>
          <textarea name='code' id='code' className='border rounded p-2 w-full' />
        </div>
        <button type="submit" className='p-2 rounded bg-blue-200'>Create</button>
      </div>
    </form>
  )
}
