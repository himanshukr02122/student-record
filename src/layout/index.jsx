import React from 'react'
import Sidebar from './sidebar'

const Layout=({children})=> {
  return (

      <>

        <main>
          <div className="w-full h-full flex items-start justify-between">
            <Sidebar />
            <div className="w-full h-full overflow-hidden transition-all">
              {children}
            </div>
          </div>
          
        </main>
      </>
      
        )
}
export default Layout;