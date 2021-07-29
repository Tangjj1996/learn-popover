!(function () {
	var e = {
			267: function (e, t, n) {
				'use strict'
				n.r(t),
					n.d(t, {
						default: function () {
							return le
						},
					})
				var r = n(766)
				function o(e) {
					var t = e.getBoundingClientRect()
					return {
						width: t.width,
						height: t.height,
						top: t.top,
						right: t.right,
						bottom: t.bottom,
						left: t.left,
						x: t.left,
						y: t.top,
					}
				}
				function i(e) {
					if (null == e) return window
					if ('[object Window]' !== e.toString()) {
						var t = e.ownerDocument
						return (t && t.defaultView) || window
					}
					return e
				}
				function a(e) {
					var t = i(e)
					return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset }
				}
				function s(e) {
					return e instanceof i(e).Element || e instanceof Element
				}
				function f(e) {
					return e instanceof i(e).HTMLElement || e instanceof HTMLElement
				}
				function c(e) {
					return (
						'undefined' != typeof ShadowRoot &&
						(e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
					)
				}
				function p(e) {
					return e ? (e.nodeName || '').toLowerCase() : null
				}
				function u(e) {
					return ((s(e) ? e.ownerDocument : e.document) || window.document)
						.documentElement
				}
				function l(e) {
					return o(u(e)).left + a(e).scrollLeft
				}
				function d(e) {
					return i(e).getComputedStyle(e)
				}
				function m(e) {
					var t = d(e),
						n = t.overflow,
						r = t.overflowX,
						o = t.overflowY
					return /auto|scroll|overlay|hidden/.test(n + o + r)
				}
				function h(e, t, n) {
					void 0 === n && (n = !1)
					var r,
						s,
						c = u(t),
						d = o(e),
						h = f(t),
						v = { scrollLeft: 0, scrollTop: 0 },
						g = { x: 0, y: 0 }
					return (
						(h || (!h && !n)) &&
							(('body' !== p(t) || m(c)) &&
								(v =
									(r = t) !== i(r) && f(r)
										? { scrollLeft: (s = r).scrollLeft, scrollTop: s.scrollTop }
										: a(r)),
							f(t)
								? (((g = o(t)).x += t.clientLeft), (g.y += t.clientTop))
								: c && (g.x = l(c))),
						{
							x: d.left + v.scrollLeft - g.x,
							y: d.top + v.scrollTop - g.y,
							width: d.width,
							height: d.height,
						}
					)
				}
				function v(e) {
					var t = o(e),
						n = e.offsetWidth,
						r = e.offsetHeight
					return (
						Math.abs(t.width - n) <= 1 && (n = t.width),
						Math.abs(t.height - r) <= 1 && (r = t.height),
						{ x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
					)
				}
				function g(e) {
					return 'html' === p(e)
						? e
						: e.assignedSlot || e.parentNode || (c(e) ? e.host : null) || u(e)
				}
				function y(e) {
					return ['html', 'body', '#document'].indexOf(p(e)) >= 0
						? e.ownerDocument.body
						: f(e) && m(e)
						? e
						: y(g(e))
				}
				function b(e, t) {
					var n
					void 0 === t && (t = [])
					var r = y(e),
						o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
						a = i(r),
						s = o ? [a].concat(a.visualViewport || [], m(r) ? r : []) : r,
						f = t.concat(s)
					return o ? f : f.concat(b(g(s)))
				}
				function w(e) {
					return ['table', 'td', 'th'].indexOf(p(e)) >= 0
				}
				function x(e) {
					return f(e) && 'fixed' !== d(e).position ? e.offsetParent : null
				}
				function O(e) {
					for (
						var t = i(e), n = x(e);
						n && w(n) && 'static' === d(n).position;

					)
						n = x(n)
					return n &&
						('html' === p(n) || ('body' === p(n) && 'static' === d(n).position))
						? t
						: n ||
								(function (e) {
									var t =
										-1 !== navigator.userAgent.toLowerCase().indexOf('firefox')
									if (
										-1 !== navigator.userAgent.indexOf('Trident') &&
										f(e) &&
										'fixed' === d(e).position
									)
										return null
									for (
										var n = g(e);
										f(n) && ['html', 'body'].indexOf(p(n)) < 0;

									) {
										var r = d(n)
										if (
											'none' !== r.transform ||
											'none' !== r.perspective ||
											'paint' === r.contain ||
											-1 !==
												['transform', 'perspective'].indexOf(r.willChange) ||
											(t && 'filter' === r.willChange) ||
											(t && r.filter && 'none' !== r.filter)
										)
											return n
										n = n.parentNode
									}
									return null
								})(e) ||
								t
				}
				var E = 'top',
					j = 'bottom',
					D = 'right',
					P = 'left',
					M = 'auto',
					k = [E, j, D, P],
					L = 'start',
					S = 'end',
					B = 'viewport',
					A = 'popper',
					W = k.reduce(function (e, t) {
						return e.concat([t + '-' + L, t + '-' + S])
					}, []),
					R = [].concat(k, [M]).reduce(function (e, t) {
						return e.concat([t, t + '-' + L, t + '-' + S])
					}, []),
					T = [
						'beforeRead',
						'read',
						'afterRead',
						'beforeMain',
						'main',
						'afterMain',
						'beforeWrite',
						'write',
						'afterWrite',
					]
				function H(e) {
					var t = new Map(),
						n = new Set(),
						r = []
					function o(e) {
						n.add(e.name),
							[]
								.concat(e.requires || [], e.requiresIfExists || [])
								.forEach(function (e) {
									if (!n.has(e)) {
										var r = t.get(e)
										r && o(r)
									}
								}),
							r.push(e)
					}
					return (
						e.forEach(function (e) {
							t.set(e.name, e)
						}),
						e.forEach(function (e) {
							n.has(e.name) || o(e)
						}),
						r
					)
				}
				var _ = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
				function q() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
						t[n] = arguments[n]
					return !t.some(function (e) {
						return !(e && 'function' == typeof e.getBoundingClientRect)
					})
				}
				function C(e) {
					void 0 === e && (e = {})
					var t = e,
						n = t.defaultModifiers,
						r = void 0 === n ? [] : n,
						o = t.defaultOptions,
						i = void 0 === o ? _ : o
					return function (e, t, n) {
						void 0 === n && (n = i)
						var o,
							a,
							f = {
								placement: 'bottom',
								orderedModifiers: [],
								options: Object.assign({}, _, i),
								modifiersData: {},
								elements: { reference: e, popper: t },
								attributes: {},
								styles: {},
							},
							c = [],
							p = !1,
							u = {
								state: f,
								setOptions: function (n) {
									l(),
										(f.options = Object.assign({}, i, f.options, n)),
										(f.scrollParents = {
											reference: s(e)
												? b(e)
												: e.contextElement
												? b(e.contextElement)
												: [],
											popper: b(t),
										})
									var o,
										a,
										p = (function (e) {
											var t = H(e)
											return T.reduce(function (e, n) {
												return e.concat(
													t.filter(function (e) {
														return e.phase === n
													})
												)
											}, [])
										})(
											((o = [].concat(r, f.options.modifiers)),
											(a = o.reduce(function (e, t) {
												var n = e[t.name]
												return (
													(e[t.name] = n
														? Object.assign({}, n, t, {
																options: Object.assign(
																	{},
																	n.options,
																	t.options
																),
																data: Object.assign({}, n.data, t.data),
														  })
														: t),
													e
												)
											}, {})),
											Object.keys(a).map(function (e) {
												return a[e]
											}))
										)
									return (
										(f.orderedModifiers = p.filter(function (e) {
											return e.enabled
										})),
										f.orderedModifiers.forEach(function (e) {
											var t = e.name,
												n = e.options,
												r = void 0 === n ? {} : n,
												o = e.effect
											if ('function' == typeof o) {
												var i = o({
													state: f,
													name: t,
													instance: u,
													options: r,
												})
												c.push(i || function () {})
											}
										}),
										u.update()
									)
								},
								forceUpdate: function () {
									if (!p) {
										var e = f.elements,
											t = e.reference,
											n = e.popper
										if (q(t, n)) {
											;(f.rects = {
												reference: h(t, O(n), 'fixed' === f.options.strategy),
												popper: v(n),
											}),
												(f.reset = !1),
												(f.placement = f.options.placement),
												f.orderedModifiers.forEach(function (e) {
													return (f.modifiersData[e.name] = Object.assign(
														{},
														e.data
													))
												})
											for (var r = 0; r < f.orderedModifiers.length; r++)
												if (!0 !== f.reset) {
													var o = f.orderedModifiers[r],
														i = o.fn,
														a = o.options,
														s = void 0 === a ? {} : a,
														c = o.name
													'function' == typeof i &&
														(f =
															i({
																state: f,
																options: s,
																name: c,
																instance: u,
															}) || f)
												} else (f.reset = !1), (r = -1)
										}
									}
								},
								update:
									((o = function () {
										return new Promise(function (e) {
											u.forceUpdate(), e(f)
										})
									}),
									function () {
										return (
											a ||
												(a = new Promise(function (e) {
													Promise.resolve().then(function () {
														;(a = void 0), e(o())
													})
												})),
											a
										)
									}),
								destroy: function () {
									l(), (p = !0)
								},
							}
						if (!q(e, t)) return u
						function l() {
							c.forEach(function (e) {
								return e()
							}),
								(c = [])
						}
						return (
							u.setOptions(n).then(function (e) {
								!p && n.onFirstUpdate && n.onFirstUpdate(e)
							}),
							u
						)
					}
				}
				var N = { passive: !0 },
					I = {
						name: 'eventListeners',
						enabled: !0,
						phase: 'write',
						fn: function () {},
						effect: function (e) {
							var t = e.state,
								n = e.instance,
								r = e.options,
								o = r.scroll,
								a = void 0 === o || o,
								s = r.resize,
								f = void 0 === s || s,
								c = i(t.elements.popper),
								p = [].concat(t.scrollParents.reference, t.scrollParents.popper)
							return (
								a &&
									p.forEach(function (e) {
										e.addEventListener('scroll', n.update, N)
									}),
								f && c.addEventListener('resize', n.update, N),
								function () {
									a &&
										p.forEach(function (e) {
											e.removeEventListener('scroll', n.update, N)
										}),
										f && c.removeEventListener('resize', n.update, N)
								}
							)
						},
						data: {},
					}
				function V(e) {
					return e.split('-')[0]
				}
				function U(e) {
					return e.split('-')[1]
				}
				function z(e) {
					return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
				}
				function F(e) {
					var t,
						n = e.reference,
						r = e.element,
						o = e.placement,
						i = o ? V(o) : null,
						a = o ? U(o) : null,
						s = n.x + n.width / 2 - r.width / 2,
						f = n.y + n.height / 2 - r.height / 2
					switch (i) {
						case E:
							t = { x: s, y: n.y - r.height }
							break
						case j:
							t = { x: s, y: n.y + n.height }
							break
						case D:
							t = { x: n.x + n.width, y: f }
							break
						case P:
							t = { x: n.x - r.width, y: f }
							break
						default:
							t = { x: n.x, y: n.y }
					}
					var c = i ? z(i) : null
					if (null != c) {
						var p = 'y' === c ? 'height' : 'width'
						switch (a) {
							case L:
								t[c] = t[c] - (n[p] / 2 - r[p] / 2)
								break
							case S:
								t[c] = t[c] + (n[p] / 2 - r[p] / 2)
						}
					}
					return t
				}
				var X = {
						name: 'popperOffsets',
						enabled: !0,
						phase: 'read',
						fn: function (e) {
							var t = e.state,
								n = e.name
							t.modifiersData[n] = F({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: 'absolute',
								placement: t.placement,
							})
						},
						data: {},
					},
					Y = Math.max,
					G = Math.min,
					J = Math.round,
					K = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
				function Q(e) {
					var t,
						n = e.popper,
						r = e.popperRect,
						o = e.placement,
						a = e.offsets,
						s = e.position,
						f = e.gpuAcceleration,
						c = e.adaptive,
						p = e.roundOffsets,
						l =
							!0 === p
								? (function (e) {
										var t = e.x,
											n = e.y,
											r = window.devicePixelRatio || 1
										return { x: J(J(t * r) / r) || 0, y: J(J(n * r) / r) || 0 }
								  })(a)
								: 'function' == typeof p
								? p(a)
								: a,
						m = l.x,
						h = void 0 === m ? 0 : m,
						v = l.y,
						g = void 0 === v ? 0 : v,
						y = a.hasOwnProperty('x'),
						b = a.hasOwnProperty('y'),
						w = P,
						x = E,
						M = window
					if (c) {
						var k = O(n),
							L = 'clientHeight',
							S = 'clientWidth'
						k === i(n) &&
							'static' !== d((k = u(n))).position &&
							((L = 'scrollHeight'), (S = 'scrollWidth')),
							(k = k),
							o === E && ((x = j), (g -= k[L] - r.height), (g *= f ? 1 : -1)),
							o === P && ((w = D), (h -= k[S] - r.width), (h *= f ? 1 : -1))
					}
					var B,
						A = Object.assign({ position: s }, c && K)
					return f
						? Object.assign(
								{},
								A,
								(((B = {})[x] = b ? '0' : ''),
								(B[w] = y ? '0' : ''),
								(B.transform =
									(M.devicePixelRatio || 1) < 2
										? 'translate(' + h + 'px, ' + g + 'px)'
										: 'translate3d(' + h + 'px, ' + g + 'px, 0)'),
								B)
						  )
						: Object.assign(
								{},
								A,
								(((t = {})[x] = b ? g + 'px' : ''),
								(t[w] = y ? h + 'px' : ''),
								(t.transform = ''),
								t)
						  )
				}
				var Z = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
				function $(e) {
					return e.replace(/left|right|bottom|top/g, function (e) {
						return Z[e]
					})
				}
				var ee = { start: 'end', end: 'start' }
				function te(e) {
					return e.replace(/start|end/g, function (e) {
						return ee[e]
					})
				}
				function ne(e, t) {
					var n = t.getRootNode && t.getRootNode()
					if (e.contains(t)) return !0
					if (n && c(n)) {
						var r = t
						do {
							if (r && e.isSameNode(r)) return !0
							r = r.parentNode || r.host
						} while (r)
					}
					return !1
				}
				function re(e) {
					return Object.assign({}, e, {
						left: e.x,
						top: e.y,
						right: e.x + e.width,
						bottom: e.y + e.height,
					})
				}
				function oe(e, t) {
					return t === B
						? re(
								(function (e) {
									var t = i(e),
										n = u(e),
										r = t.visualViewport,
										o = n.clientWidth,
										a = n.clientHeight,
										s = 0,
										f = 0
									return (
										r &&
											((o = r.width),
											(a = r.height),
											/^((?!chrome|android).)*safari/i.test(
												navigator.userAgent
											) || ((s = r.offsetLeft), (f = r.offsetTop))),
										{ width: o, height: a, x: s + l(e), y: f }
									)
								})(e)
						  )
						: f(t)
						? (function (e) {
								var t = o(e)
								return (
									(t.top = t.top + e.clientTop),
									(t.left = t.left + e.clientLeft),
									(t.bottom = t.top + e.clientHeight),
									(t.right = t.left + e.clientWidth),
									(t.width = e.clientWidth),
									(t.height = e.clientHeight),
									(t.x = t.left),
									(t.y = t.top),
									t
								)
						  })(t)
						: re(
								(function (e) {
									var t,
										n = u(e),
										r = a(e),
										o = null == (t = e.ownerDocument) ? void 0 : t.body,
										i = Y(
											n.scrollWidth,
											n.clientWidth,
											o ? o.scrollWidth : 0,
											o ? o.clientWidth : 0
										),
										s = Y(
											n.scrollHeight,
											n.clientHeight,
											o ? o.scrollHeight : 0,
											o ? o.clientHeight : 0
										),
										f = -r.scrollLeft + l(e),
										c = -r.scrollTop
									return (
										'rtl' === d(o || n).direction &&
											(f += Y(n.clientWidth, o ? o.clientWidth : 0) - i),
										{ width: i, height: s, x: f, y: c }
									)
								})(u(e))
						  )
				}
				function ie(e) {
					return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e)
				}
				function ae(e, t) {
					return t.reduce(function (t, n) {
						return (t[n] = e), t
					}, {})
				}
				function se(e, t) {
					void 0 === t && (t = {})
					var n = t,
						r = n.placement,
						i = void 0 === r ? e.placement : r,
						a = n.boundary,
						c = void 0 === a ? 'clippingParents' : a,
						l = n.rootBoundary,
						m = void 0 === l ? B : l,
						h = n.elementContext,
						v = void 0 === h ? A : h,
						y = n.altBoundary,
						w = void 0 !== y && y,
						x = n.padding,
						P = void 0 === x ? 0 : x,
						M = ie('number' != typeof P ? P : ae(P, k)),
						L = v === A ? 'reference' : A,
						S = e.elements.reference,
						W = e.rects.popper,
						R = e.elements[w ? L : v],
						T = (function (e, t, n) {
							var r =
									'clippingParents' === t
										? (function (e) {
												var t = b(g(e)),
													n =
														['absolute', 'fixed'].indexOf(d(e).position) >= 0 &&
														f(e)
															? O(e)
															: e
												return s(n)
													? t.filter(function (e) {
															return s(e) && ne(e, n) && 'body' !== p(e)
													  })
													: []
										  })(e)
										: [].concat(t),
								o = [].concat(r, [n]),
								i = o[0],
								a = o.reduce(function (t, n) {
									var r = oe(e, n)
									return (
										(t.top = Y(r.top, t.top)),
										(t.right = G(r.right, t.right)),
										(t.bottom = G(r.bottom, t.bottom)),
										(t.left = Y(r.left, t.left)),
										t
									)
								}, oe(e, i))
							return (
								(a.width = a.right - a.left),
								(a.height = a.bottom - a.top),
								(a.x = a.left),
								(a.y = a.top),
								a
							)
						})(s(R) ? R : R.contextElement || u(e.elements.popper), c, m),
						H = o(S),
						_ = F({
							reference: H,
							element: W,
							strategy: 'absolute',
							placement: i,
						}),
						q = re(Object.assign({}, W, _)),
						C = v === A ? q : H,
						N = {
							top: T.top - C.top + M.top,
							bottom: C.bottom - T.bottom + M.bottom,
							left: T.left - C.left + M.left,
							right: C.right - T.right + M.right,
						},
						I = e.modifiersData.offset
					if (v === A && I) {
						var V = I[i]
						Object.keys(N).forEach(function (e) {
							var t = [D, j].indexOf(e) >= 0 ? 1 : -1,
								n = [E, j].indexOf(e) >= 0 ? 'y' : 'x'
							N[e] += V[n] * t
						})
					}
					return N
				}
				function fe(e, t, n) {
					return Y(e, G(t, n))
				}
				function ce(e, t, n) {
					return (
						void 0 === n && (n = { x: 0, y: 0 }),
						{
							top: e.top - t.height - n.y,
							right: e.right - t.width + n.x,
							bottom: e.bottom - t.height + n.y,
							left: e.left - t.width - n.x,
						}
					)
				}
				function pe(e) {
					return [E, D, j, P].some(function (t) {
						return e[t] >= 0
					})
				}
				var ue = C({
						defaultModifiers: [
							I,
							X,
							{
								name: 'computeStyles',
								enabled: !0,
								phase: 'beforeWrite',
								fn: function (e) {
									var t = e.state,
										n = e.options,
										r = n.gpuAcceleration,
										o = void 0 === r || r,
										i = n.adaptive,
										a = void 0 === i || i,
										s = n.roundOffsets,
										f = void 0 === s || s,
										c = {
											placement: V(t.placement),
											popper: t.elements.popper,
											popperRect: t.rects.popper,
											gpuAcceleration: o,
										}
									null != t.modifiersData.popperOffsets &&
										(t.styles.popper = Object.assign(
											{},
											t.styles.popper,
											Q(
												Object.assign({}, c, {
													offsets: t.modifiersData.popperOffsets,
													position: t.options.strategy,
													adaptive: a,
													roundOffsets: f,
												})
											)
										)),
										null != t.modifiersData.arrow &&
											(t.styles.arrow = Object.assign(
												{},
												t.styles.arrow,
												Q(
													Object.assign({}, c, {
														offsets: t.modifiersData.arrow,
														position: 'absolute',
														adaptive: !1,
														roundOffsets: f,
													})
												)
											)),
										(t.attributes.popper = Object.assign(
											{},
											t.attributes.popper,
											{ 'data-popper-placement': t.placement }
										))
								},
								data: {},
							},
							{
								name: 'applyStyles',
								enabled: !0,
								phase: 'write',
								fn: function (e) {
									var t = e.state
									Object.keys(t.elements).forEach(function (e) {
										var n = t.styles[e] || {},
											r = t.attributes[e] || {},
											o = t.elements[e]
										f(o) &&
											p(o) &&
											(Object.assign(o.style, n),
											Object.keys(r).forEach(function (e) {
												var t = r[e]
												!1 === t
													? o.removeAttribute(e)
													: o.setAttribute(e, !0 === t ? '' : t)
											}))
									})
								},
								effect: function (e) {
									var t = e.state,
										n = {
											popper: {
												position: t.options.strategy,
												left: '0',
												top: '0',
												margin: '0',
											},
											arrow: { position: 'absolute' },
											reference: {},
										}
									return (
										Object.assign(t.elements.popper.style, n.popper),
										(t.styles = n),
										t.elements.arrow &&
											Object.assign(t.elements.arrow.style, n.arrow),
										function () {
											Object.keys(t.elements).forEach(function (e) {
												var r = t.elements[e],
													o = t.attributes[e] || {},
													i = Object.keys(
														t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
													).reduce(function (e, t) {
														return (e[t] = ''), e
													}, {})
												f(r) &&
													p(r) &&
													(Object.assign(r.style, i),
													Object.keys(o).forEach(function (e) {
														r.removeAttribute(e)
													}))
											})
										}
									)
								},
								requires: ['computeStyles'],
							},
							{
								name: 'offset',
								enabled: !0,
								phase: 'main',
								requires: ['popperOffsets'],
								fn: function (e) {
									var t = e.state,
										n = e.options,
										r = e.name,
										o = n.offset,
										i = void 0 === o ? [0, 0] : o,
										a = R.reduce(function (e, n) {
											return (
												(e[n] = (function (e, t, n) {
													var r = V(e),
														o = [P, E].indexOf(r) >= 0 ? -1 : 1,
														i =
															'function' == typeof n
																? n(Object.assign({}, t, { placement: e }))
																: n,
														a = i[0],
														s = i[1]
													return (
														(a = a || 0),
														(s = (s || 0) * o),
														[P, D].indexOf(r) >= 0
															? { x: s, y: a }
															: { x: a, y: s }
													)
												})(n, t.rects, i)),
												e
											)
										}, {}),
										s = a[t.placement],
										f = s.x,
										c = s.y
									null != t.modifiersData.popperOffsets &&
										((t.modifiersData.popperOffsets.x += f),
										(t.modifiersData.popperOffsets.y += c)),
										(t.modifiersData[r] = a)
								},
							},
							{
								name: 'flip',
								enabled: !0,
								phase: 'main',
								fn: function (e) {
									var t = e.state,
										n = e.options,
										r = e.name
									if (!t.modifiersData[r]._skip) {
										for (
											var o = n.mainAxis,
												i = void 0 === o || o,
												a = n.altAxis,
												s = void 0 === a || a,
												f = n.fallbackPlacements,
												c = n.padding,
												p = n.boundary,
												u = n.rootBoundary,
												l = n.altBoundary,
												d = n.flipVariations,
												m = void 0 === d || d,
												h = n.allowedAutoPlacements,
												v = t.options.placement,
												g = V(v),
												y =
													f ||
													(g !== v && m
														? (function (e) {
																if (V(e) === M) return []
																var t = $(e)
																return [te(e), t, te(t)]
														  })(v)
														: [$(v)]),
												b = [v].concat(y).reduce(function (e, n) {
													return e.concat(
														V(n) === M
															? (function (e, t) {
																	void 0 === t && (t = {})
																	var n = t,
																		r = n.placement,
																		o = n.boundary,
																		i = n.rootBoundary,
																		a = n.padding,
																		s = n.flipVariations,
																		f = n.allowedAutoPlacements,
																		c = void 0 === f ? R : f,
																		p = U(r),
																		u = p
																			? s
																				? W
																				: W.filter(function (e) {
																						return U(e) === p
																				  })
																			: k,
																		l = u.filter(function (e) {
																			return c.indexOf(e) >= 0
																		})
																	0 === l.length && (l = u)
																	var d = l.reduce(function (t, n) {
																		return (
																			(t[n] = se(e, {
																				placement: n,
																				boundary: o,
																				rootBoundary: i,
																				padding: a,
																			})[V(n)]),
																			t
																		)
																	}, {})
																	return Object.keys(d).sort(function (e, t) {
																		return d[e] - d[t]
																	})
															  })(t, {
																	placement: n,
																	boundary: p,
																	rootBoundary: u,
																	padding: c,
																	flipVariations: m,
																	allowedAutoPlacements: h,
															  })
															: n
													)
												}, []),
												w = t.rects.reference,
												x = t.rects.popper,
												O = new Map(),
												S = !0,
												B = b[0],
												A = 0;
											A < b.length;
											A++
										) {
											var T = b[A],
												H = V(T),
												_ = U(T) === L,
												q = [E, j].indexOf(H) >= 0,
												C = q ? 'width' : 'height',
												N = se(t, {
													placement: T,
													boundary: p,
													rootBoundary: u,
													altBoundary: l,
													padding: c,
												}),
												I = q ? (_ ? D : P) : _ ? j : E
											w[C] > x[C] && (I = $(I))
											var z = $(I),
												F = []
											if (
												(i && F.push(N[H] <= 0),
												s && F.push(N[I] <= 0, N[z] <= 0),
												F.every(function (e) {
													return e
												}))
											) {
												;(B = T), (S = !1)
												break
											}
											O.set(T, F)
										}
										if (S)
											for (
												var X = function (e) {
														var t = b.find(function (t) {
															var n = O.get(t)
															if (n)
																return n.slice(0, e).every(function (e) {
																	return e
																})
														})
														if (t) return (B = t), 'break'
													},
													Y = m ? 3 : 1;
												Y > 0 && 'break' !== X(Y);
												Y--
											);
										t.placement !== B &&
											((t.modifiersData[r]._skip = !0),
											(t.placement = B),
											(t.reset = !0))
									}
								},
								requiresIfExists: ['offset'],
								data: { _skip: !1 },
							},
							{
								name: 'preventOverflow',
								enabled: !0,
								phase: 'main',
								fn: function (e) {
									var t = e.state,
										n = e.options,
										r = e.name,
										o = n.mainAxis,
										i = void 0 === o || o,
										a = n.altAxis,
										s = void 0 !== a && a,
										f = n.boundary,
										c = n.rootBoundary,
										p = n.altBoundary,
										u = n.padding,
										l = n.tether,
										d = void 0 === l || l,
										m = n.tetherOffset,
										h = void 0 === m ? 0 : m,
										g = se(t, {
											boundary: f,
											rootBoundary: c,
											padding: u,
											altBoundary: p,
										}),
										y = V(t.placement),
										b = U(t.placement),
										w = !b,
										x = z(y),
										M = 'x' === x ? 'y' : 'x',
										k = t.modifiersData.popperOffsets,
										S = t.rects.reference,
										B = t.rects.popper,
										A =
											'function' == typeof h
												? h(
														Object.assign({}, t.rects, {
															placement: t.placement,
														})
												  )
												: h,
										W = { x: 0, y: 0 }
									if (k) {
										if (i || s) {
											var R = 'y' === x ? E : P,
												T = 'y' === x ? j : D,
												H = 'y' === x ? 'height' : 'width',
												_ = k[x],
												q = k[x] + g[R],
												C = k[x] - g[T],
												N = d ? -B[H] / 2 : 0,
												I = b === L ? S[H] : B[H],
												F = b === L ? -B[H] : -S[H],
												X = t.elements.arrow,
												J = d && X ? v(X) : { width: 0, height: 0 },
												K = t.modifiersData['arrow#persistent']
													? t.modifiersData['arrow#persistent'].padding
													: { top: 0, right: 0, bottom: 0, left: 0 },
												Q = K[R],
												Z = K[T],
												$ = fe(0, S[H], J[H]),
												ee = w ? S[H] / 2 - N - $ - Q - A : I - $ - Q - A,
												te = w ? -S[H] / 2 + N + $ + Z + A : F + $ + Z + A,
												ne = t.elements.arrow && O(t.elements.arrow),
												re = ne
													? 'y' === x
														? ne.clientTop || 0
														: ne.clientLeft || 0
													: 0,
												oe = t.modifiersData.offset
													? t.modifiersData.offset[t.placement][x]
													: 0,
												ie = k[x] + ee - oe - re,
												ae = k[x] + te - oe
											if (i) {
												var ce = fe(d ? G(q, ie) : q, _, d ? Y(C, ae) : C)
												;(k[x] = ce), (W[x] = ce - _)
											}
											if (s) {
												var pe = 'x' === x ? E : P,
													ue = 'x' === x ? j : D,
													le = k[M],
													de = le + g[pe],
													me = le - g[ue],
													he = fe(d ? G(de, ie) : de, le, d ? Y(me, ae) : me)
												;(k[M] = he), (W[M] = he - le)
											}
										}
										t.modifiersData[r] = W
									}
								},
								requiresIfExists: ['offset'],
							},
							{
								name: 'arrow',
								enabled: !0,
								phase: 'main',
								fn: function (e) {
									var t,
										n = e.state,
										r = e.name,
										o = e.options,
										i = n.elements.arrow,
										a = n.modifiersData.popperOffsets,
										s = V(n.placement),
										f = z(s),
										c = [P, D].indexOf(s) >= 0 ? 'height' : 'width'
									if (i && a) {
										var p = (function (e, t) {
												return ie(
													'number' !=
														typeof (e =
															'function' == typeof e
																? e(
																		Object.assign({}, t.rects, {
																			placement: t.placement,
																		})
																  )
																: e)
														? e
														: ae(e, k)
												)
											})(o.padding, n),
											u = v(i),
											l = 'y' === f ? E : P,
											d = 'y' === f ? j : D,
											m =
												n.rects.reference[c] +
												n.rects.reference[f] -
												a[f] -
												n.rects.popper[c],
											h = a[f] - n.rects.reference[f],
											g = O(i),
											y = g
												? 'y' === f
													? g.clientHeight || 0
													: g.clientWidth || 0
												: 0,
											b = m / 2 - h / 2,
											w = p[l],
											x = y - u[c] - p[d],
											M = y / 2 - u[c] / 2 + b,
											L = fe(w, M, x),
											S = f
										n.modifiersData[r] =
											(((t = {})[S] = L), (t.centerOffset = L - M), t)
									}
								},
								effect: function (e) {
									var t = e.state,
										n = e.options.element,
										r = void 0 === n ? '[data-popper-arrow]' : n
									null != r &&
										('string' != typeof r ||
											(r = t.elements.popper.querySelector(r))) &&
										ne(t.elements.popper, r) &&
										(t.elements.arrow = r)
								},
								requires: ['popperOffsets'],
								requiresIfExists: ['preventOverflow'],
							},
							{
								name: 'hide',
								enabled: !0,
								phase: 'main',
								requiresIfExists: ['preventOverflow'],
								fn: function (e) {
									var t = e.state,
										n = e.name,
										r = t.rects.reference,
										o = t.rects.popper,
										i = t.modifiersData.preventOverflow,
										a = se(t, { elementContext: 'reference' }),
										s = se(t, { altBoundary: !0 }),
										f = ce(a, r),
										c = ce(s, o, i),
										p = pe(f),
										u = pe(c)
									;(t.modifiersData[n] = {
										referenceClippingOffsets: f,
										popperEscapeOffsets: c,
										isReferenceHidden: p,
										hasPopperEscaped: u,
									}),
										(t.attributes.popper = Object.assign(
											{},
											t.attributes.popper,
											{
												'data-popper-reference-hidden': p,
												'data-popper-escaped': u,
											}
										))
								},
							},
						],
					}),
					le = function () {
						var e = (0, r.useRef)(),
							t = (0, r.useRef)()
						return (
							(0, r.useEffect)(function () {
								ue(e.current, t.current, { placement: 'right' })
							}, []),
							r.createElement(
								'div',
								{ className: 'app' },
								r.createElement(
									'button',
									{ className: 'app__btn', ref: e },
									'click me'
								),
								r.createElement(
									'div',
									{ className: 'app__tooltip', ref: t },
									'tooltip'
								)
							)
						)
					}
			},
			302: function (e, t, n) {
				'use strict'
				var r = n(766),
					o = n(901),
					i = n(267)
				;(e = n.hmd(e)),
					o.render(
						r.createElement(i.default, null),
						document.getElementById('app')
					),
					e &&
						e.hot.accept('./app', function () {
							Promise.resolve()
								.then(n.bind(n, 267))
								.then(function (e) {
									var t = e.default
									o.render(
										r.createElement(t, null),
										document.getElementById('app')
									)
								})
						})
			},
			901: function (e, t, n) {
				e.exports = n(142)('./node_modules/react-dom/index.js')
			},
			766: function (e, t, n) {
				e.exports = n(142)('./node_modules/react/index.js')
			},
			142: function (e) {
				'use strict'
				e.exports = verdor_lib
			},
		},
		t = {}
	function n(r) {
		var o = t[r]
		if (void 0 !== o) return o.exports
		var i = (t[r] = { id: r, loaded: !1, exports: {} })
		return e[r](i, i.exports, n), (i.loaded = !0), i.exports
	}
	;(n.d = function (e, t) {
		for (var r in t)
			n.o(t, r) &&
				!n.o(e, r) &&
				Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
	}),
		(n.hmd = function (e) {
			return (
				(e = Object.create(e)).children || (e.children = []),
				Object.defineProperty(e, 'exports', {
					enumerable: !0,
					set: function () {
						throw new Error(
							'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
								e.id
						)
					},
				}),
				e
			)
		}),
		(n.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}),
		(n.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 })
		}),
		n(302)
})()
//# sourceMappingURL=main.c3130781.js.map
