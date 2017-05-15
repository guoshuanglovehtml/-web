             var NAME = document.getElementsByClassName("NAME");
                          for (var i = 0; i < NAME.length; i++) {
                                NAME[i].onblur=function(){   
                                     var NAME= /^[\u4e00-\u9fa5]{2,}$/;
                                      if(!NAME.test(this.value)){
                                              this.value = '姓名格式不正确';
                                        this.focus = function (){
                                                       this.value = "";
                                                      }
                                                }
                                                

                                            }
                                        };





                       var IDS = document.getElementsByClassName("ID");
                           for (var i = 0; i < IDS.length; i++)  {
                               IDS[i].onblur=function(){   
                                var sheng = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
                                      if(!sheng.test(this.value)) {
                                         this.value = '身份证号不能为空';
                                           this.onfocus = function () {
                                                  this.value = "";
                                                        }
                                                    }
                                                }
                                        };


                        var tele = document.getElementsByClassName("tele");
                           for (var i = 0; i < tele.length; i++){ 
                              tele[i].onblur=function(){ 
                                 var tel = /1[3|4|5|7|8][0-9]\d{8}$/;
                                     if(!tel.test(this.value)){
                                      this.value = '手机号不可为空';
                                        this.onfocus = function () {
                                          this.value = "";
                                                        }
                                                     }
                                                }
                                        };

