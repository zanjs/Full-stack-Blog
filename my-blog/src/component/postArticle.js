import React, {
	Component
} from 'react';
import {FormGroup,ControlLabel,FormControl,Button,HelpBlock} from'react-bootstrap';
import {addPost,fetchEditPost,updatePost} from '../service/fetch';
import ArticleFoot from './ArticleFoot';
import PropTypes from 'prop-types'
/*
mode 1 代表发表文章
mode 2 代表编辑文章
 */
export default class PostArticle  extends Component{
	static propTypes=({
		user:PropTypes.object,
		showFlashMessage:PropTypes.func,
		removeFlashMessage:PropTypes.func,
		addArticle:PropTypes.func,
	})
	constructor(props){
		super(props);
		this.state={
			title:props.title||"",
			context:props.context||"",
			mode:1,
		}
	}
async  componentDidMount(){
		let {articleId} = this.props.match.params;
		if(articleId){
       let result = await fetchEditPost(articleId)
			if(result.code==1){
				  let post = result.post;
					this.setState({
						title:post.title,
						context:post.content,
						id:articleId
					})
			}else{
				this.props.showFlashMessage({
					msgType:"danger",
					msg:"文章不存在",
				})
			let pathname ='/personal/index',
			 redirectState = { from: this.props.location };
			 this.props.redirect(pathname,redirectState)
			}
      this.setState({
				mode:2
			})
		}
	}
	render(){
    let {title,context}  = this.state;
		return (<div className="article_container">
	    <img className="author_logo"/>
			<div className="article_wrap">

		    <section className="article_context">
					<FieldGroup
						id="formControlsText"
						type="text"
						label="标题"
						placeholder="Enter text"
						value={title}
						onChange={(event)=>this.setState({title:event.target.value})}
					/>
					<FormGroup controlId="formControlsTextarea">
						<ControlLabel>内容</ControlLabel>
						<FormControl componentClass="textarea" placeholder="textarea"
							onChange={(event)=>this.setState({context:event.target.value})}
							style={{ height: 200 }}
							value={context}/>
					</FormGroup>
		    </section>
				{
					this.state.mode==1?	<Button
						componentClass="foot_btn"
						onClick={()=>this._postArticle()}>
					发送</Button>:null

				}
				{
					this.state.mode==2?	<Button
						componentClass="foot_btn"
						onClick={()=>this._updateArticle()}>完成</Button>:null
				}
			</div>
	  </div>)
	}
	//发表文章的网络请求
  async _postArticle(){
		let {title,context}=this.state;
			//检查数据有效性
			if(title==""){

			}else{
				if(context==""){

				}else{
					let result = await addPost({
						article:{
							title,
							context,
						},
						user_id:this.props.user._id,
					})
					if(result.code==1){
						this.props.addArticle(result.post);
						this.props.showFlashMessage({
							msgType:"success",
							msg:"文章发表成功",
						})
						let pathname ='/personal/index',
 					 redirectState = { from: this.props.location };
 					 this.props.redirect(pathname,redirectState)
					}
				}
			}

	}
	//更新文章的网络请求
   async _updateArticle(){
		 let {title,context}=this.state;
		 if(title==""){

		 }else{
			 if(context==""){

			 }else{
				 try{
				 let result = await updatePost(this.state.id,{
					    title,
							context
				 })
				 if(result.code==1){
					this.props.showFlashMessage({
						msgType:"success",
						msg:"更新成功"
					})
						let pathname ='/personal/index',
					 redirectState = { from: this.props.location };
					 this.props.redirect(pathname,redirectState)
				 }else{
					 this.props.showFlashMessage({
						 msgType:"danger",
						 msg:"更新失败请稍后再试"
					 })
				 }
			 }catch(e){
        console.log(e);
			 }

			 }

	 }
}
}
//返回表单元素组
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
