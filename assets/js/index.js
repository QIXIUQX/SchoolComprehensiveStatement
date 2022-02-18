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
			data: [0, 0, 0,0]                     // 数据
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
 * 考级次数走势图
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
			layout: 'horizontal',
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
			name: '考级次数',                        // 数据列名
			// data: [0, 0, 0, 0, 0, 0]                     // 数据
			// data: [0, 99, 75, 1]    ,                 // 数据
			data: [0, 0,0,0]                     // 数据
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
 * 阅读任务综合报表
 */
function readingActivityCharts() {
	Highcharts.chart('reading-activity-charts', {
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
			layout: 'horizontal',
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
		series: [
			{                              // 数据列
				name: '阅读本书',                        // 数据列名
				// data: [0, 0, 0, 0, 0, 0]                     // 数据
				// data: [0, 99, 75, 1]    ,                 // 数据
				data: [0,0,0,0]                     // 数据
			},
			{                              // 数据列
				name: '阅读活动',                        // 数据列名
				data: [0,0,0,0]                     // 数据
			}
		],
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
 * 阅读任务综合报表 最近120天数据
 */
function last120DayCharts() {
	Highcharts.chart('last-120-day-charts', {
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
			layout: 'horizontal',
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
		series: [
			{                              // 数据列
				name: '阅读任务',                        // 数据列名
				data: [0,0,0,0]                     // 数据
			},
			{                              // 数据列
				name: '阅读活动',                        // 数据列名
				data: [0,0,0,0]                     // 数据
			}
		],
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
 * 每月一测图表
 */
function monthlyTestCharts() {

	Highcharts.chart('monthly-test-charts', {
		chart: {
			polar: true,
			type: 'line'
		},
		title: {
			text: '',
			// x: -80
		},
		pane: {
			size: '70%'
		},
		xAxis: {
			categories: ['运用', '检索', '评测', '创新',
				'理解'],
			tickmarkPlacement: 'on',
			lineWidth: 0
		},
		yAxis: {
			gridLineInterpolation: 'polygon',
			lineWidth: 0,
			min: 0
		},
		tooltip: {
			shared: true,
			pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
		},
		legend: {
			layout: 'horizontal',
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
		series: [{
			name: '每月一测',
			data: [4, 4, 3, 4, 5],
			pointPlacement: 'on'
		}]
	});
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
 * 点击切换三个月和四个月数据
 */
function handleToggleMonthBtnClick() {
	$(".toggle-item").on("click", function () {
		$(this).addClass("active-toggle-item").siblings().removeClass("active-toggle-item")
	})
}

/**
 * 获取任务数
 */
function getTaskData() {
	var readingTaskList = $(".reading-task-list")
	var readingTaskListItemStr = ""
	var monthMap = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]

	$.ajax({
		url: "http://localhost:3000/readingTask",
		data: {},
		type: "POST",
		async: false,
		dataType: "json",
		success: function (data) {

			$.each(data, function (i, item) {
				readingTaskListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + monthMap[parseInt(dateUtils.dateFormat(item.time, "MM月")) - 1] + '</div>' +
					'		<div class="x-item-content">' + item.grade + '</div>' +
					'		<div class="x-item-content">' + item.taskNum + '</div>' +
					'		<div class="x-item-content">' + (item.participationRate * 100).toFixed(2) + '%</div>' +
					'		<div class="x-item-content">' + (item.passingRate * 100).toFixed(2) + '%</div>' +
					'	</div>'

			})
			readingTaskList.html(readingTaskListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});
}


/**
 * 活动热力图
 */
function getActivityHotRank() {
	var activityHotListEl = $(".activity-hot-list")
	var activityHotListItemStr = ""

	$.ajax({
		url: "http://localhost:3000/activityHotRank",
		data: {},
		type: "POST",
		async: false,
		dataType: "json",
		success: function (data) {
			$.each(data, function (i, item) {
				activityHotListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + item.rank + '</div>' +
					'		<div class="x-item-content">' + item.activityName + '</div>' +
					'		<div class="x-item-content">' + item.grade + '</div>' +
					'		<div class="x-item-content">' + (item.passingRate * 100).toFixed(2) + '%</div>' +
					'		<div class="x-item-content">' + item.works + '</div>' +
					'	</div>'
			})
			activityHotListEl.html(activityHotListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
	});

}

/**
 * 活动热力图
 */
function getSchoolRank() {
	var schoolRankingListEl = $(".school-ranking-list")
	var schoolRankingListItemStr="";

	$.ajax({
		url: "http://localhost:3000/schoolRank",
		data: {},
		type: "POST",
		async: false,
		dataType: "json",
		success: function (data) {
			$.each(data, function (i, item) {
				schoolRankingListItemStr +=
					'	<div class="x-item">' +
					'		<div class="x-item-content">' + item.rank + '</div>' +
					'		<div class="x-item-content">' + item.schoolName + '</div>' +
					'		<div class="x-item-content">' + item.aveReadingBookCount + '</div>' +
					'	</div>'
			})
			schoolRankingListEl.html(schoolRankingListItemStr)
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.error("请求异常:", errorThrown, "在：", jqXHR)
		}
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
		handleToggleMonthBtnClick()
		readingActivityCharts()
		last120DayCharts()
		getTaskData()
		getActivityHotRank()
		monthlyTestCharts()
		getSchoolRank()
	}
}