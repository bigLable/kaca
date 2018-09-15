const DAO =require('./DAO')
class WX{
    wximg(wxImg){
        return DAO('select * from wx where wxImg=?',[wxImg])
    }
    wxname(wxName){
        return DAO('select * from wx where wxName=?',[wxName])
    }
    wxfrom(wxFrom){
        return DAO('select * from wx where wxFrom=?',[wxFrom])
    }
    wxtime(wxTime){
        return DAO('select * from wx where wxTime=?',[wxTime])
    }
    wxPhone(wxphone){
        return DAO('select * from wx where wxphone=?',[wxphone])
    }
    wxpage(wxPage){
        return DAO('select * from wx where wxPage=?',[wxPage])
    }

}