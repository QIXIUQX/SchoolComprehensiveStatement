/**
 * 生均阅读量走势图
 */
function readingsPerStudentCharts() {
	Highcharts.chart('readings-per-student-charts', {
		chart: {
			type: 'line',
			style: {
				fontFamily: "",
				fontSize: '12px',
				fontWeight: 'bold',
				color: '#006cee'
			}
		},
		title: {
			text: ''                 // 标题
		},
		subtitle: {
			text: ""
		},
		xAxis: {
			categories: ['11.2', '12.31', '7.9', '8.5']  // x 轴分类
		},
		yAxis: {
			title: {
				text: ''                // y 轴标题
			},

			min: 0,
			minRange: 1
		},
		legend: {
			layout: 'vertical',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [{                              // 数据列
			name: '生均阅读量',                        // 数据列名
			// data: [0, 0, 0, 0, 0, 0]                     // 数据
			// data: [0, 99, 75, 1]    ,                 // 数据
			data: [7, 2, 1, 8]                     // 数据
		}],
		responsive: {},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			// backgroundColor: {
			// 	linearGradient: [0, 0, 0, 60],
			// 	stops: [
			// 		[0, '#FFFFFF'],
			// 		[1, '#E0E0E0']
			// 	]
			// },
			borderWidth: 1,
			borderColor: '#AAA'
		},
		exporting: {enabled: false}
	});
}

/**
 * 生均阅读量走势图
 */
function examTimesCharts() {
	Highcharts.chart('exam-times-charts', {
		chart: {
			type: 'line',
			style: {
				fontFamily: "",
				fontSize: '12px',
				fontWeight: 'bold',
				color: '#006cee'
			}
		},
		title: {
			text: ''                 // 标题
		},
		subtitle: {
			text: ""
		},
		xAxis: {
			categories: ['2022年2月17日', '2022年2月18日', '2022年2月19日', '2022年2月20日', '2022年2月21日', '2022年2月22日']  // x 轴分类
		},
		yAxis: {
			title: {
				text: ''                // y 轴标题
			},

			min: 0,
			minRange: 1
		},
		legend: {
			layout: 'vertical',
			align: 'center',
			verticalAlign: 'bottom'
		},
		plotOptions: {
			line: {
				dataLabels: {
					// 开启数据标签
					enabled: true
				},
				// 关闭鼠标跟踪，对应的提示框、点击事件会失效
				enableMouseTracking: true
			}
		},
		series: [{                              // 数据列
			name: '考级次数走',                        // 数据列名
			// data: [0, 0, 0, 0, 0, 0]                     // 数据
			// data: [0, 99, 75, 1]    ,                 // 数据
			data: [5, 7, 3, 9]                     // 数据
		}],
		responsive: {},
		credits: {
			enabled: false // 禁用版权信息
		},
		tooltip: {
			// backgroundColor: {
			// 	linearGradient: [0, 0, 0, 60],
			// 	stops: [
			// 		[0, '#FFFFFF'],
			// 		[1, '#E0E0E0']
			// 	]
			// },
			borderWidth: 1,
			borderColor: '#AAA'
		},
		exporting: {enabled: false}
	});
}


window.onload = function () {
	init()

	/**
	 * 进入页面初始化内容
	 */
	function init() {
		getGradeList()
		getInfoCategory()
		readingsPerStudentCharts()
		examTimesCharts()
		getReadingsPerStudentTab()
	}
}

/**
 * 获取班级信息并渲染到页面中
 */
function getGradeList() {
	var gradeListEl = $(".grade-select") // 选择器元素
	var gradeListItemStr = "" // 每一个年级字符串
	$.ajax({
		url: "http://localhost:3000/getGradeList",
		data: {},
		type: "POST",
		async: false,
		dataType: "json",
		success: function (gradeList) {
			$.each(gradeList, function (i, item) {
				gradeListItemStr += '<option value="grade_' + i + '">' + item + '</option>'
			})
			gradeListEl.html(gradeListItemStr)
			gradeListItemStr = ""
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "，在：", jqXHR)
		}
	});
}

/**
 * 考级等信息分类数据获取
 */
function getInfoCategory() {
	var infoCategoryListEl = $(".info-category-list")
	var categoryInfoItemStr = ""
	var categoryTitleList = ["本月人均考级本数", "本月考级次数", "本月考级任务发布数", "本月考级参与率", "本月考级通过率", "本月阅读活动举办数"]


	// var examBookNumEl = $("exam-book-num") //本月人均考级本数
	// var examTotalEl = $("exam-total") //本月考级次数
	// var examPublishTotalEl = $("exam-publish-total") //本月考级任务发布数
	// var examParticipateRateEl = $("exam-participate-rate") //本月考级参与率
	// var examPassRateEl = $("exam-pass-rate") //本月考级通过率
	// var readingEventConductTotalEl = $("reading-event-conduct-total") //本月阅读活动举办数

	var categoryInfoMap = [
		{
			imgSrcName: "down",
			className: "proportion-num-down",
			symbol: "-"
		}, {
			imgSrcName: "up",
			className: "proportion-num-up",
			symbol: "+"
		}
	]


	$.ajax({
		url: "http://localhost:3000/getInfoCategory",
		data: {},
		type: "POST",
		async: false,
		dataType: "json",
		success: function (categoryList) {
			console.log(categoryList);
			$.each(categoryList, function (i, item) {
				categoryInfoItemStr +=
					'	<div class="info-cate-item ">' +
					'		<p class="item-title">' + categoryTitleList[i] + '</p>' +
					'		<!--具体数值和 上升下降-->' +
					'		<div class="item-body">' +
					'			<!--具体数值-->' +
					'			<div class="body-num">' + item.count + '</div>' +
					'			<!--百分比和图表-->' +
					'			<div class="proportion-wrap">' +
					'				<div class="proportion-img">' +
					'					<img src="./assets/images/img_' + categoryInfoMap[item.ratioType].imgSrcName + '.png" alt="">' +
					'				</div>' +
					'				<div class="proportion-num  ' + categoryInfoMap[item.ratioType].className + '">' + categoryInfoMap[item.ratioType].symbol + item.ratioNum + '%</div>' +
					'			</div>' +
					'		</div>' +
					'	</div>'
			})
			infoCategoryListEl.html(categoryInfoItemStr)
			categoryInfoItemStr = ""
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}

/**
 * 获取生均阅读数据表
 */
function getReadingsPerStudentTab() {
	var readingStudentListEl = $(".reading-student-list")
	var readingStudentListItemStr = ""

	$.ajax({
		url: "http://localhost:3000/getReadingsPerStudentTabData",
		data: {},
		type: "POST",
		async: false,
		dataType: "json",
		success: function (data) {
			console.log(data);
			$.each(data, function (i, item) {
				readingStudentListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + dateUtils.dateFormat(item.time, "yyyy.MM.dd") + '-' + dateUtils.dateFormat(item.endTime, "yyyy.MM.dd") + '</div>' +
					'		<div class="x-item-content">' + item.grade + '</div>' +
					'		<div class="x-item-content">' + item.readingNum + '</div>' +
					'		<div class="x-item-content">' + item.examNum + '</div>' +
					'	</div>'


			})
			readingStudentListEl.html(readingStudentListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}


/**
 * switch 被点击 切换switch 状态和自定义属性的值
 * @param _this 被点击的switch
 */
function switchClick(_this) {
	var value = $(_this).attr("data-value");
	if (value === "true") {
		$(_this).attr("data-value", "false");
		$(_this).children(".x-switch-core").removeClass("is-check");
		$(_this).find(".x-switch-button").html("最近3个月");
	} else {
		$(_this).attr("data-value", "true");
		$(_this).children(".x-switch-core").addClass("is-check");
		$(_this).find(".x-switch-button").html("最近4个月");
	}
}

$(function () {
	/**
	 * 渲染 Switch到页面中
	 */
	function renderSwitch() {
		var xSwitchArr = $(".x-switch");
		var switchStr = "<span class=\"x-switch-core\"><span class=\"x-switch-button\">最近4个月</span></span>";
		for (var i = 0; i < xSwitchArr.length; i++) {
			$(xSwitchArr[i]).html(switchStr);
			setDefaultStyle(xSwitchArr[i]);
		}

		/**
		 * 如果默认就是选中状态的，需要给他添加相应的类并且val的值改为：true
		 * @param  { HTMLElement } el 需要设置样式或者取消样式的element元素
		 */
		function setDefaultStyle(el) {
			var value = $(el).attr("data-value");
			//如果默认就是true  则添加 is-check
			if (value === "true") {
				$(el).children(".x-switch-core").addClass("is-check");
			}
		}
	}

	/**
	 * 进入页面初始化调用
	 */
	function init() {
		renderSwitch();
	}

	init();
});
