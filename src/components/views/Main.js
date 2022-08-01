// Main will create Routes to Login, Register and Authorize, which will nest Routes to the NavBar and App
import { Routes, Route, Outlet } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { NavBar } from "../nav/NavBar"
import { AddSongsToSet } from "../newsongs/AddSongToSet"
import { Create } from "../newsongs/Create"
import { Import } from "../newsongs/Import"
import { SongContainer } from "../newsongs/SongContainer"
import { AllSets } from "../sets/AllSets"
import { CreateSetlist } from "../sets/CreateSetlist"
import { SetDetails } from "../sets/SetDetails"
import { AllSongs } from "../songs/AllSongs"
import { SongDetails } from "../songs/SongDetails"




export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                <header>
                    {<NavBar />}
                    <div className="logo">
                        <h1>Lyrically</h1>
                        <h6>Your digital setlist...</h6>
                    </div>
                    </header>
                    <Outlet />
                </>
            }>

                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/allsongs" element={<AllSongs />}></Route>
                <Route path="/setlists" element={<AllSets />}></Route>
                <Route path="/import" element={< SongContainer />}></Route>
                <Route path="/create" element={<Create />}></Route>
                <Route path="/songs/:songId" element={<SongDetails />}></Route>
                <Route path="/setlists/:setlistId" element={<SetDetails/>}></Route>
                <Route path="/setlists/create" element={<CreateSetlist />}></Route>
                <Route path="setlist/addsongs" element={<AddSongsToSet />}></Route> 
            
            </Route> 
               
        </Routes>
    )
}
//note: to route to a specific screen, based on the id, set the path to songs/:songId and invoke the component that you want rendored to that new screen in element.
//note: while Routing, you are setting the path to the url. Routes also must invoke a function and have a "to" to pair with
