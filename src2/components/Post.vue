<template>
    <div className="row " style="background:white;height:auto;margin: 50px">
    <div  style="height:70px;width:100%,background:#a2a8ac">
        <img class="container" style="height:65px;max-width:90px;border-radius:50%" >
        <span>
                <b>Ashu shared a thought on </b>
        </span>
        <span>
        </span>
      
    </div>
    <div  style="width:100%"> 
        <div style="margin-left:30px;margin-top:10px;height:auto">
            <i><b>Some Dummy Post</b></i>
        </div>

        <div class="container" style="margin-bottom:10px ;position:relative ; width:100%;margin-top:100px">
        <button onClick={this.like} className="btn btn-warning">Like</button>                
                <span  class="bottom-align" >
                    <button id="likepost" class="btn btn-link">
                        <i class="fas fa-thumbs-up fa-2x"></i>
                    </button>
                    <i onClick={this.getLikes} data-toggle="modal" data-target="#likesview" class="bottom-align" id="likescount">10 likes</i> 
                    <a onClick={this.getComments} class="bottom-align"  style="position:absolute;left:700px;font-size:large">20 Comments</a>
                </span>
        </div> 
        <div style="margin-bottom:10px" class=" row">
            <div style="margin-left:20px" class="col-8">
                    <input onChange={this.getCommentText}  class="form-control" type="text"  placeholder="Post Your Comment Here">
            </div>
            <div id="commentdiv" class="col">
                    <button onClick={this.postComment} id="postcomment" class="btn btn-secondary">Post Comment</button>                            
            </div>     
        </div> 
        </div>

</div>
</template>
